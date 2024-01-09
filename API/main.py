from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return 'Hello World'

@app.route('/api', methods=['POST'])
def api():
    if request.method == 'POST':
        data = request.get_json()
        user = {
            'name': data['name']
        }
        return jsonify(user)

if __name__ == '__main__':
    app.run(debug=True)