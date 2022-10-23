let getJsonFile = (pathToFile) => {
    let request = new XMLHttpRequest();
  
    request.open("GET", pathToFile, false);
    request.send(null);
  
    let my_JSON_object = JSON.parse(request.responseText);
  
    return my_JSON_object;
  };
  const emojiList = getJsonFile("https://emoji-api-app.herokuapp.com/");

//import emojiList from "https://emoji-api-app.herokuapp.com/"

export const searchEmoji = (value) => {
    //создала массив "ответ"
    //при совпадении текста, введенного в инпут, карточка эмоджи отправляется в массив
    const response = [];
    emojiList.map(item => {
        if (item.keywords.includes(value)) {
            response.push(item);
        }
    })
    //разделение массива на куски по 25 карточек
    return response.slice(0, 24);
}