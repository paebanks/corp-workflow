from flask import Flask, jsonify, request, render_template;
import json

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('index.html')

# POST /user data:{user_id, lasntname, firstname,...}
@app.route('/user', methods=['POST'])
def create_user():
	request_data = request.get_json()
	if(request_data):
		new_user = {
			'user_id': request_data['user_id'],
			'surname': request_data['surname'],
			'firstname': request_data['firstname'],
			'department': request_data['department'],
			'image_url': request_data['image_url'],
			'tasks': []
		}
	
		with open('data/users.json', "r") as userFile:
			data = json.load(userFile)

	
		data['users'].append(new_user)

		with open('data/users.json', "w") as userFile:
			json.dump(data, userFile)

		return jsonify(new_user)

	return jsonify({'message': 'no data submitted'})



@app.route('/user', methods=['GET'])
def get_users():
	with open('data/users.json', "r") as userFile:
		data = json.load(userFile)

	return jsonify(data)


# GET  /user/<string: user_id>
@app.route('/user/<string:id>', methods=['GET'])
def get_user(id):

	with open('data/users.json', "r") as userFile:
		users = json.load(userFile)

	for user in users['users']:
		if(user['user_id'] == id):
			return jsonify(user)

	return jsonify({'message': 'user not found'})

	

# PUT  /user/<string: user_id> data{}
@app.route('/user/<string:id>', methods=['PUT'])
def update_user(id):

	request_data = request.get_json()

	if(request_data):

		updated_user = {
			'user_id': request_data['user_id'],
			'surname': request_data['surname'],
			'firstname': request_data['firstname'],
			'department': request_data['department'],
			'image_url': request_data['image_url']
		}

		with open('data/users.json', "r") as userFile:
			users = json.load(userFile)

		for user in users['users']:
			if(user['user_id'] == id):
				user.update(updated_user)
				return jsonify(user)

		return jsonify({'message': 'no user found'})

	return jsonify({'message': 'no data submitted'})


# POST /task data:{task_id, title, ...}
@app.route('/task', methods=['POST'])
def create_task():
	
	request_data = request.get_json()
	if(request_data):
		new_task = {
		'task_id': request_data['task_id'],
		'title': request_data['title'],
		'description': request_data['description'],
		'officer': request_data['officer'],
		'priority': request_data['priority'],
		'assigned_date': request_data['assigned_date'],
		'due_date': request_data['due_date'],
		'metrics': []
		}

		with open('data/tasks.json', "r") as taskFile:
			tasks = json.load(taskFile)

		tasks['tasks'].append(new_task)

		with open('data/tasks.json', "w") as taskFile:
			json.dump(tasks, taskFile)

		return jsonify(new_task)

	return jsonify({'message': 'no data submitted'})



# PUT  /task/<string: task_id>
@app.route('/task/<string:id>', methods=['PUT'])
def update_task(id):
	request_data = request.get_json()

	if(request_data):
		updated_task = {
		'task_id': request_data['task_id'],
		'title': request_data['title'],
		'description': request_data['description'],
		'officer': request_data['officer'],
		'priority': request_data['priority'],
		'assigned_date': request_data['assigned_date'],
		'due_date': request_data['due_date']
		}

		with open('data/tasks', "r") as taskFile:
			tasks = json.load(taskFile)

		for task in tasks['tasks']:
			if(task[task_id] == id):
				task.update(updated_task)
				return jsonify(task)
		return jsonify({'message': 'task not found'})

	return jsonify({'message': 'no data submitted'})


#GET  /task
@app.route('/task', methods=['GET'])
def get_tasks():

	with open('data/tasks.json', "r") as taskFile:
		tasks = json.load(taskFile)

	return jsonify(tasks)

#GET  /task/<string:id>
@app.route('/task/<string:id>', methods=['GET'])
def get_task(id):
	with open('data/tasks.json', "r") as taskFile:
		tasks = json.load(taskFile)

	for task in tasks['tasks']:
		if(task['task_id'] == id):
			return jsonify(task)

	return jsonify({'message': 'task not found'})




if __name__ == '__main__':
	app.run(port=5000, debug=True)