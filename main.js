let flag = false;
document.querySelector("#myBtn").addEventListener("click", () => {
  if (flag) {
    getData(12, false);
    flag = false;
    document.querySelector(".getBtn").innerHTML = "نمایش کمتر";
  } else {
    getData(0, true);
    document.querySelector(".getBtn").innerHTML = "نمایش بیشتر";
    flag = true;
  }
});

const getData = (count = 0, all = false) => {
  if (all) {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        for (var i = 0; i < data.items.length; i++) {
          let vimage = data.items[i].image;
          let vpersion = data.items[i].persion;
          let venglish = data.items[i].english;
          let vprice = data.items[i].price;
          let vpercent = data.items[i].percent;
          document.querySelector("#tb1").innerHTML = `
            <tbody class="">
          <tr class="text-align">
            <div class="">
              <td class="td-name border-top">
                <a href="" class="flex">
                  <picture class="td-name-picture"
                    ><img
                      src="${vimage}"
                      alt=""
                      class="td-name-image"
                      id=""
                  /></picture>
                  <div class="flex">
                    <span class="td-name-bold">${vpersion}</span
                    ><span class="td-name-small" id="english">${venglish}</span>
                  </div>
                </a>
              </td>
              <td class="td-pric border-top">
                <div class="td-pric-bold">${vprice}</div>
              </td>
              <td class="td-chang border-top">
                <div class="td-chang-color">${vpercent}</div>
              </td>
              
              <td class="td-button border-top">
                <div class="">
                  <a href="" class="td-button-buy">معامله</a>
                </div>
              </td>
            </div>
          </tr>
        </tbody>`;
        }
      });
  } else {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.items.slice(0, count);
        console.log(newData);
        newData.forEach((element) => {
          let vimage = element.image;
          let vpersion = element.persion;
          let venglish = element.english;
          let vprice = element.price;
          let vpercent = element.percent;
          document.querySelector("#tb1").innerHTML += `
            <tbody class="">
          <tr class="text-align">
            <div class="">
              <td class="td-name border-top">
                <a href="" class="flex">
                  <picture class="td-name-picture"
                    ><img
                      src="${vimage}"
                      alt=""
                      class="td-name-image"
                      id=""
                  /></picture>
                  <div class="flex">
                    <span class="td-name-bold">${vpersion}</span
                    ><span class="td-name-small" id="english">${venglish}</span>
                  </div>
                </a>
              </td>
              <td class="td-pric border-top">
                <div class="td-pric-bold">${vprice}</div>
              </td>
              <td class="td-chang border-top">
                <div class="td-chang-color">${vpercent}</div>
              </td>
              
              <td class="td-button border-top">
                <div class="">
                  <a href="" class="td-button-buy">معامله</a>
                </div>
              </td>
            </div>
          </tr>
        </tbody>`;
        });
      });
  }
};

function ftmConverter(valFtm) {
  document.getElementById("outputFtm").innerHTML = valFtm * 18312;
}
