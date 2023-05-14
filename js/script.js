window.addEventListener("load", () => {
  const videoElement = document.querySelector("#video");
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");
  const h1 = document.querySelector("h1");
  const h5 = document.querySelector("h5");
  const h6 = document.querySelector("h6");

  let curentVideoIndex = 0;

  const videos = [
    {
      src: "../videos/islands.mp4",
      title: "Islands",
    },
    {
      title: "Mountains",
      src: "../videos/mountains.mp4",
    },
    {
      title: "Sample",
      src: "../videos/sample.mp4",
    },
  ];
  

  setVideo(curentVideoIndex);

  document.body.addEventListener("click", () => {
    videoElement.play();
  });

  function setVideo(index, delay = 0) {
    const action = () => {
      const {  src, title } = videos[index];
      videoElement.src = src;
      h1.textContent = title;
      addAuthorAndDescription(index);
      
      videoElement.play();
    };
    delay ? setTimeout(() => action(), delay) : action();
  }

  prevBtn.addEventListener("click", function () {
    curentVideoIndex--;
    if (videos[curentVideoIndex]) {
      setVideo(curentVideoIndex, 1000);
    } else {
      curentVideoIndex = videos.at(-1);
      setVideo(curentVideoIndex, 1000);
    }
  });

  nextBtn.addEventListener("click", function () {
    curentVideoIndex++;
    if (videos[curentVideoIndex]) {
      setVideo(curentVideoIndex, 1000);
    } else {
      curentVideoIndex = 0;
      setVideo(curentVideoIndex, 1000);
    }
  });

  async function getData(index) {
    let response = await fetch(`https://type.fit/api/quotes`);
    const data = await response.json();
    console.log("AllData", data[index])
    return data[index];
  }

  function addAuthorAndDescription(index) {
    getData(index).then((data) => {
      h5.textContent = Object.values(data)[1];
      h6.textContent = Object.values(data)[0];
    })
  }
});