let page = 0,
  count = 1;

$(document).ready(function () {
  init();
});

function pageChangeHandler() {
  page++;
  init();
}

function init() {
  $.ajax({
    url: "server.php",
    method: "POST",
    data: { page },
    dataType: "json",
    async: false,
    success: function (res) {
      console.log(res);

      if (res?.length > 0) {
        let user_list_html = ``;

        res?.forEach((user) => {
          user_list_html += `<div class="user-item-container">
                <div class="left-container">
                  <span>${count++}</span>
                </div>
                <div class="right-container">
                    <span class="user-container user-title">
                      <span class="text-bold">Name:</span>
                        ${user?.name}
                    </span>
                    <span class="user-container user-location">
                        <span class="text-bold">Location:</span>${
                          user?.location
                        }</span>
                </div>
            </div>`;
        });

        $("#user-list-container").html(user_list_html);
        $("#total-users").html(res?.length);
      } else {
        alert("No more people!");
      }
    },
  });
}
