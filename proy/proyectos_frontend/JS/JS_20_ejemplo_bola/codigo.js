$(function () {
  function animarBola() {
    $("#bola")
      .animate({ left: "+=150" }, "slow")
      .animate({ top: "+=150" }, "slow")
      .animate({ left: "-=150" }, "slow")
      .animate({ top: "-=150" }, "slow");
  }

  setInterval(animarBola, 2400);
});
