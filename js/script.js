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
      title: "Islands",
      src: "../videos/islands.mp4",
      author: getData().then((data) => {
        h5.textContent = data[curentVideoIndex].author;
      }),
      description: getData().then((data) => {
        h6.textContent = data[curentVideoIndex].text;
      }),
    },
    {
      title: "Mountains",
      src: "../videos/mountains.mp4",
      author: getData().then((data) => {
        h5.textContent = data[curentVideoIndex].author;
      }),
      description: getData().then((data) => {
        h6.textContent = data[curentVideoIndex].text;
      }),
    },
    {
      title: "Sample",
      src: "../videos/sample.mp4",
      author: getData().then((data) => {
        h5.textContent = data[curentVideoIndex].author;
      }),
      description: getData().then((data) => {
        h6.textContent = data[curentVideoIndex].text;
      }),
    },
  ];
  

  setVideo(curentVideoIndex);

  document.body.addEventListener("click", () => {
    videoElement.play();
  });

  function setVideo(index, delay = 0) {
    const action = () => {
      const { title, src, author, description } = videos[index];

      videoElement.src = src;
      h1.textContent = title;
      h5.textContent = author;
      h6.textContent = description;
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

  async function getData() {
    let response = await fetch(`https://type.fit/api/quotes`);
    const data = await response.json();
    console.log("Function DATA", data)
    return data;
  }
});