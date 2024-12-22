from flask import Flask, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)  # Разрешаем CORS для всех маршрутов

@app.route('/api/tracks', methods=['GET'])
def get_tracks():
    url = 'https://ski-gv.ru/hills/'
    response = requests.get(url)

    if response.status_code != 200:
        return jsonify({"error": f"Не удалось получить данные, статус код: {response.status_code}"}), 500

    soup = BeautifulSoup(response.text, 'html.parser')
    tracks = soup.find_all('div', class_='scheme-select__option track-option option')

    results = []
    for track in tracks:
        try:
            name = track.find('div', class_='track-option__name').text.strip()
            number = track.find('div', class_='track-option__number').text.strip()
            params = track.find_all('span', class_='track-param track-option__inline-param')

            if len(params) >= 3:
                length_info = params[0].text.strip()
                time_info = params[1].text.strip()
                height_info = params[2].text.strip()
            else:
                length_info = "Нет данных"
                time_info = "Нет данных"
                height_info = "Нет данных"

            status = track.find('p', class_='track-status').text.strip()

            results.append({
                "name": name,
                "number": number,
                "length": length_info,
                "time": time_info,
                "height": height_info,
                "status": status,
            })
        except Exception as e:
            continue  # Пропускаем ошибки, чтобы не остановить парсинг

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)