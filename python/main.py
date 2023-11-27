import functions_framework
from langchain.llms import VertexAI

llm = VertexAI()

@functions_framework.http
def chat(request):
    request_json = request.get_json(silent=True)
    request_args = request.args

    question = (request_json or request_args).get('question', 'Hi')

    answer = llm(question)
    return answer