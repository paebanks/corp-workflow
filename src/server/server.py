from flask import Flask, jsonify, request;
import json

app = Flask(__name__)

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

# GET  /user/<string: user_id>
@app.route('/user/<string:id>', methods=['GET'])
def get_user(id)

# PUT  /user/<string: user_id> data{}
@app.route('/user/<string:id>', methods=['PUT'])
def update_user(id);

# POST /task data:{task_id, title, ...}
@app.route('/task', methods=['POST'])
def create_task():

# PUT  /task/<string: task_id>
@app.route('/task/<string:id>')
def update_task(id):





if __name__ == '__main__':
	app.run(port=5000, debug=True)