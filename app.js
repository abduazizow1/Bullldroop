let balance = 125000;


/* SIDEBAR */

function toggleSidebar() {

  const sidebar =
    document.getElementById("sidebar");

  sidebar.classList.toggle("open");

}


/* SCROLL */

function scrollToSection(id) {

  const element =
    document.getElementById(id);

  if (element) {

    element.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* DEPOSIT */

function openDeposit() {

  document
    .getElementById("depositModal")
    .classList.add("show");

}


function closeDeposit() {

  document
    .getElementById("depositModal")
    .classList.remove("show");

}


function selectAmount(amount) {

  alert(
    "Demo: " +
    amount.toLocaleString("uz-UZ") +
    " UZS tanlandi."
  );

}


/* PROFILE */

function showProfile() {

  scrollToSection("profile");

}


/* BUY */

function buyItem(name, price) {

  if (balance < price) {

    alert(
      "Balansingiz yetarli emas."
    );

    return;
  }


  balance -= price;

  updateBalance();


  alert(
    name +
    " tanlandi.\n\n" +
    "Narxi: " +
    price.toLocaleString("uz-UZ") +
    " UZS\n\n" +
    "Qolgan balans: " +
    balance.toLocaleString("uz-UZ") +
    " UZS"
  );

}


function updateBalance() {

  const text =
    balance.toLocaleString("uz-UZ") +
    " UZS";


  document
    .getElementById("balance")
    .textContent = text;


  document
    .getElementById("profileBalance")
    .textContent = text;

}


/* GAME */

function gameInfo(game) {

  alert(
    game +
    "\n\nDemo versiyada bu bo'lim keyingi bosqichda ulanadi."
  );

}


/* BONUS */

function claimBonus() {

  alert(
    "Demo: bonus tizimi keyingi bosqichda backend bilan ulanadi."
  );

}


/* MODAL OUTSIDE CLICK */

document
  .getElementById("depositModal")
  .addEventListener(
    "click",
    function(event) {

      if (
        event.target === this
      ) {

        closeDeposit();

      }

    }
  );
