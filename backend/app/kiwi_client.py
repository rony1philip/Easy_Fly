from app.core.config import settings


class KiwiClient:
    def __init__(self):
        self.base_url = "https://api.tequila.kiwi.com/"
        self.api_key = settings.KIWI_API_KEY
        if not self.api_key:
            print("fix the infra")
            self.api_key = "G3S4VHHytFSn-PgoAY8EWrus4xwpo85Z"

    def request_location(self, location_string: str) -> None:
        pass
'''curl -X 'GET' \
  'https://api.tequila.kiwi.com/locations/query?term=PRG&locale=en-US&location_types=airport&limit=10&active_only=true' \
  -H 'accept: application/json' \
  -H 'apikey: G3S4VHHytFSn-PgoAY8EWrus4xwpo85Z'''
