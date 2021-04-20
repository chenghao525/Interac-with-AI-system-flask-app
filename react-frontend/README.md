source venv/bin/activate
pip install flask python-dotenv
flask run
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

deactivate

python /Users/chenghaosun/Documents/local_github/interact-with-AI-system-flask-app/api/main.py