window.addEventListener("load", () => {
  //$("#video").css({opacity: 0});
  $("#video, h1, h5, h6").fadeIn(1000);
  $("#prev, #next").on("click", () => {
    $("#video").fadeOut(1000).fadeIn(1000);

    $("h1, h5, h6").animate(
      {
        top: "-=50",
      },
      1,
      () => {
        $("h1, h5, h6").animate({ top: "+=50", opcity: "-=1" }, 1000, () => {
          $("h1, h5, h6").animate({ opcity: "+=1" });
        });
      }
    );
  });
});
