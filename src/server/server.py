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

	
	data.append(new_user)

	with open('data/users.json', "w") as userFile:
		json.dump(data, userFile)

	return jsonify(new_user)

@app.route('/user', methods=['GET'])
def get_users():
	with open('data/users.json', "r") as userFile:
		data = json.load(userFile)

	return jsonify({'users': data})


# GET  /user/<string: user_id>
@app.route('/user/<string:id>', methods=['GET'])
def get_user(id):

	with open('data/users.json', "r") as userFile:
		users = json.load(userFile)

	for user in users:
		if(user['user_id'] == id):
			return jsonify(user)

	return jsonify({'message': 'user not found'})


	

# PUT  /user/<string: user_id> data{}
@app.route('/user/<string:id>', methods=['PUT'])
def update_user(id):
	return jsonify('{}')


# POST /task data:{task_id, title, ...}
@app.route('/task', methods=['POST'])
def create_task():
	return jsonify('{}')



# PUT  /task/<string: task_id>
@app.route('/task/<string:id>', methods=['PUT'])
def update_task(id):
	return jsonify('{}')



@app.route('/task', methods=['GET'])
def get_tasks():

	with open('data/tasks.json', "r") as taskFile:
		tasks = json.load(taskFile)

	return jsonify({'tasks': tasks})


@app.route('/task/<string:id>', methods=['GET'])
def get_task(id):
	with open('data/tasks.json', "r") as taskFile:
		tasks = json.load(taskFile)

	for task in tasks:
		if(task['task_id'] == id):
			return jsonify(task)

	return jsonify({'message': 'task not found'})




if __name__ == '__main__':
	app.run(port=5000, debug=True)