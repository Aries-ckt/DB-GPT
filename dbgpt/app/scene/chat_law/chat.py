from typing import Dict

from dbgpt._private.config import Config
from dbgpt.app.scene import BaseChat, ChatScene
from dbgpt.util.tracer import root_tracer, trace

CFG = Config()


class ChatLaw(BaseChat):
    chat_scene: str = ChatScene.ChatLaw.value()

    keep_end_rounds: int = 10

    """Number of results to return from the query"""

    def __init__(self, chat_param: Dict):
        """ """
        chat_param["chat_mode"] = ChatScene.ChatNormal
        super().__init__(
            chat_param=chat_param,
        )

    @trace()
    async def generate_input_values(self) -> Dict:
        input_values = {"input": self.current_user_input}
        return input_values

    @property
    def chat_type(self) -> str:
        return ChatScene.ChatLaw.value

