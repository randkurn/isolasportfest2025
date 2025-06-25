"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {
  const nimInput = document.getElementById("nim");
  if (nimInput) {
    nimInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        cekDivisi();
      }
    });
  }

  document.getElementById("checkButton").addEventListener("click", cekDivisi);
});

function cekDivisi() {
  const nimInput = document.getElementById("nim").value.trim();
  const hasilElement = document.getElementById("hasilRecruitment");
  const modal = document.getElementById("resultModal");

  let found = false;

  // Data divisi dan NIM anggota
  const divisions = {
    "Administrative": ["2409582", "2400991", "2306309", "2408982", "*Sekre"],
    "Finance": ["2401662", "2307745", "2400867", "2300540", "2408135", "*Bendahara"],
    "Event": ["2304830", "2402620", "2407290", "2402722", "2407399", "2310582", "2405990", "2401249", "2401020", "*Acara"],
    "Competition": ["2407218", "2400545", "2401920", "2402855", "2407976", "2405871", "2300395", "2404021", "2305322", "2405840", "*Korlap", "2400817", "2404827", "2403223", "2410137", "2402822", "2409856", "2400920", "2410478", "2305817", "2404287", "2403160"],
    "Public Relation": ["2404401", "2301018", "2311636", "2405857", "2301624", "2405645", "2410559", "2402765", "2404973", "*Humas"],
    "Sponsorship": ["*Danus","2402730", "2404695", "2310215", "2309225", "2410073", "2404966", "2404968", "2407796", "2404812", "2400686", "2404685"],
    "Media Creative": ["*PDD","2407447", "2308244", "2401228", "2405707", "2402756", "2401401", "2406256", "2409073", "2401825", "2309758", "2408191", "2408087", "2404145", "2409154"],
    "Catering": ["*Konsum","2409793", "2307243", "2402165", "2401346", "2402916", "2400903", "2407773", "2407802"],
    "Medic": ["*Med","2401798", "2306093", "2401121", "2402063", "2402270", "2400393", "2410126", "2402764"],
    "Equipment": ["*Log","2410015", "2309599", "2404364", "2401518", "2404134", "2409126", "2405977", "2310633", "2405122"],
    "Guard": ["*Keamanan","2401632", "2402023", "2307813", "2300493", "2405929", "2307539", "2311641", "2307151", "2311137", "2400965", "2311720", "2304216", "2406443", "2403154"]
  };

// Mengecek setiap divisi satu per satu
if (divisions["Administrative"].includes(nimInput)) {
  hasilElement.innerHTML = `<h4 class="congrats">🎉 Selamat! Anda lolos dalam divisi <strong>Administrative</strong> 🎉<br>
  Semangat dalam menjalankan tugasnya!<br>Silahkan masuk ke dalam grup panitia!</h4>
  <a href="https://chat.whatsapp.com/EGxBtgws0u2LHFBEfCddzj"><button class="copybutton">Join Grup Panitia dan Divisi Kamu</button></a>

  <div class="content-card">
    <div class="table-container">
      <table class="division-table">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Captain</td><td>Nirma Dwi Suci Ramadhani</td></tr>
          <tr><td>Vice Captain</td><td>Phebe Febriella Efarina Sirno</td></tr>
          <tr><td>Staff</td><td>Febby Deca Lestari</td></tr>
          <tr><td></td><td>Naufal Hazazi Dzil Ikram</td></tr>
          <tr><td></td><td>Siti Nur Azizah</td></tr>
        </tbody>
      </table>
    </div>
  </div>`;
  found = true;
} 
else if (divisions["Finance"].includes(nimInput)) {
  hasilElement.innerHTML = `<h4 class="congrats">🎉 Selamat! Anda lolos di divisi <strong>Finance</strong> 🎉<br>
  Semangat dalam menjalankan tugasnya!<br>Silahkan masuk ke dalam grup panitia!</h4>
  <a href="https://chat.whatsapp.com/EGxBtgws0u2LHFBEfCddzj"><button class="copybutton">Join Grup Panitia dan Divisi Kamu</button></a>

  <div class="content-card">
    <div class="table-container">
      <table class="division-table">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Captain</td><td>Nabilla Hafizah Zahra</td></tr>
          <tr><td>Vice Captain</td><td>Alya Putri Ramadhani</td></tr>
          <tr><td>Staff</td><td>Reifana Muhamad Al Kindi</td></tr>
          <tr><td></td><td>Latifah Khairiah</td></tr>
          <tr><td></td><td>Nazwa Febriani</td></tr>
        </tbody>
      </table>
    </div>
  </div>`;
  found = true;
} else if (divisions["Event"].includes(nimInput)) {
  hasilElement.innerHTML = `<h4 class="congrats">🎉 Selamat! Anda lolos di divisi <strong>Event</strong> 🎉<br>
  Semangat dalam menjalankan tugasnya!<br>Silahkan masuk ke dalam grup panitia!</h4>
  <a href="https://chat.whatsapp.com/EGxBtgws0u2LHFBEfCddzj"><button class="copybutton">Join Grup Panitia dan Divisi Kamu</button></a>

  <div class="content-card">
    <div class="table-container">
      <table class="division-table">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Captain</td><td>Nabila Syawaliya</td></tr>
          <tr><td>Vice Captain</td><td>Azhara Putri Handayani</td></tr>
          <tr><td>Staff</td><td>Tazqiyah Rimba Majid Nugraha</td></tr>
          <tr><td></td><td>Fatin Tsamratul Fu'adah</td></tr>
          <tr><td></td><td>Amirul Muhammad Rabbani</td></tr>
          <tr><td></td><td>Nurjihan Rizky Thahira</td></tr>
          <tr><td></td><td>Saveria shabrina</td></tr>
          <tr><td></td><td>Dewi Anjani Praharanti</td></tr>
          <tr><td></td><td>Bayu Aji Wahyu Utomo</td></tr>
          <tr><td></td><td>Septiana Putri</td></tr>
        </tbody>
      </table>
    </div>
  </div>`;
  found = true;
} else if (divisions["Competition"].includes(nimInput)) {
  hasilElement.innerHTML = `<h4 class="congrats">🎉 Selamat! Anda lolos di divisi <strong>Competition</strong> 🎉<br>
  Semangat dalam menjalankan tugasnya!<br>Silahkan masuk ke dalam grup panitia!</h4>
  <a href="https://chat.whatsapp.com/EGxBtgws0u2LHFBEfCddzj"><button class="copybutton">Join Grup Panitia dan Divisi Kamu</button></a>

  <div class="content-card">
    <div class="table-container">
      <table class="division-table">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Captain</td><td>Hafidz Ahmad Fahrizy</td></tr>
          <tr><td>Vice Captain</td><td>Syifa Awalia</td></tr>
          <tr><td>Game Master Futsal</td><td>Togar Meipiter Christoper Sinurat</td></tr>
          <tr><td></td><td>Soraya Farhana</td></tr>
          <tr><td></td><td>Misar</td></tr>
          <tr><td></td><td>Iqbal Novianto</td></tr>
          <tr><td>Game Master Basket</td><td>Fahrel Sanjaya</td></tr>
          <tr><td></td><td>Gina Nurhasanah</td></tr>
          <tr><td></td><td>Raysha Happy</td></tr>
          <tr><td></td><td>Mellisa Aulia Nursiamy</td></tr>
          <tr><td>Game Master Badminton</td><td>Kenji Ahmad Darelly</td></tr>
          <tr><td></td><td>Asep Sulaeman</td></tr>
          <tr><td></td><td>Annisa Salsabila</td></tr>
          <tr><td></td><td>Ariel Dwika Nugraha</td></tr>
          <tr><td></td><td>Rafly Furqon Musharaf</td></tr>
          <tr><td>Game Master Voli</td><td>Abdus Salam Azzahra</td></tr>
          <tr><td></td><td>Citra Sya'bani Agustin</td></tr>
          <tr><td></td><td>Sayyidah Muthiara Kamillah</td></tr>
          <tr><td></td><td>Muhammad Rifa Ardhan</td></tr>
          <tr><td></td><td>Sefia Jihan Dwisaputri</td></tr>
          <tr><td>Game Master E-Sport</td><td>Hiroshi Qashdus Sabil Sulaeman</td></tr>
          <tr><td></td><td>Dhavin Radithya Dhuha</td></tr>
          <tr><td></td><td>Achmad Choeron</td></tr>
        </tbody>
      </table>
    </div>
  </div>`;
  found = true;
} else if (divisions["Public Relation"].includes(nimInput)) {
  hasilElement.innerHTML = `<h4 class="congrats">🎉 Selamat! Anda lolos di divisi <strong>Public Relation</strong> 🎉<br>
  Semangat dalam menjalankan tugasnya!<br>Silahkan masuk ke dalam grup panitia!</h4>
  <a href="https://chat.whatsapp.com/EGxBtgws0u2LHFBEfCddzj"><button class="copybutton">Join Grup Panitia dan Divisi Kamu</button></a>

  <div class="content-card">
    <div class="table-container">
      <table class="division-table">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Captain</td><td>Potjoet Syarifah Malahayati</td></tr>
          <tr><td>Vice Captain</td><td>Ghevira Aulia Rahima</td></tr>
          <tr><td>Staff</td><td>Rifal Fadli Ananda</td></tr>
          <tr><td></td><td>Shafwan</td></tr>
          <tr><td></td><td>Naila Adila Mawaddah</td></tr>
          <tr><td></td><td>Caroline Rotua Joesputri Samosir</td></tr>
          <tr><td></td><td>Muhammad Raffi Akhdan</td></tr>
          <tr><td></td><td>Anwar Hidayat</td></tr>
          <tr><td></td><td>Davina Shafa Felisha</td></tr>
          <tr><td></td><td>Putri Ayu Resfani</td></tr>
        </tbody>
      </table>
    </div>
  </div>`;
  found = true;
} else if (divisions["Sponsorship"].includes(nimInput)) {
  hasilElement.innerHTML = `<h4 class="congrats">🎉 Selamat! Anda lolos di divisi <strong>Sponsorship</strong> 🎉<br>
  Semangat dalam menjalankan tugasnya!<br>Silahkan masuk ke dalam grup panitia!</h4>
  <a href="https://chat.whatsapp.com/EGxBtgws0u2LHFBEfCddzj"><button class="copybutton">Join Grup Panitia dan Divisi Kamu</button></a>

  <div class="content-card">
    <div class="table-container">
      <table class="division-table">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Captain</td><td>Kaylla Asyifa</td></tr>
          <tr><td>Vice Captain</td><td>Silvy Zuhruffiatun Nissa</td></tr>
          <tr><td>Staff</td><td>Nisya Kholifah</td></tr>
          <tr><td></td><td>Alisya Ainun Hidayah</td></tr>
          <tr><td></td><td>Burhan Abdur Rahman</td></tr>
          <tr><td></td><td>Siti Shofa</td></tr>
          <tr><td></td><td>Exsa Evelin Tampubolon</td></tr>
          <tr><td></td><td>Najwa Meiga Azzahra</td></tr>
          <tr><td></td><td>Ismawatus Nurul Fadhillah</td></tr>
          <tr><td></td><td>Saskia Shofawatunnisa</td></tr>
          <tr><td></td><td>Maya Aulia Kusuma</td></tr>
        </tbody>
      </table>
    </div>
  </div>`;
  found = true;
} else if (divisions["Media Creative"].includes(nimInput)) {
  hasilElement.innerHTML = `<h4 class="congrats">🎉 Selamat! Anda lolos di divisi <strong>Media Creative</strong> 🎉<br>
  Semangat dalam menjalankan tugasnya!<br>Silahkan masuk ke dalam grup panitia!</h4>
  <a href="https://chat.whatsapp.com/EGxBtgws0u2LHFBEfCddzj"><button class="copybutton">Join Grup Panitia dan Divisi Kamu</button></a>

  <div class="content-card">
    <div class="table-container">
      <table class="division-table">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Captain</td><td>Zulpa Awaliyatul Padliyah</td></tr>
          <tr><td>Vice Captain Content</td><td>Angguan Nur Andiany Wiyoso</td></tr>
          <tr><td>Vice Captain Design</td><td>Elit Siti Nurbayah Maulidya</td></tr>
          <tr><td>Staff</td><td>Do'a</td></tr>
          <tr><td></td><td>Aulia Aufa Zahron</td></tr>
          <tr><td></td><td>Dwiky Jerryan Koryanto Muhammad</td></tr>
          <tr><td></td><td>Muhammad Daffa Haaditiansyah</td></tr>
          <tr><td></td><td>Amanda Nurulazmi</td></tr>
          <tr><td></td><td>Dwiana May Astiningsih</td></tr>
          <tr><td></td><td>Chairin Zahra</td></tr>
          <tr><td></td><td>Naila Tsuraya Zahra</td></tr>
          <tr><td></td><td>Ainuzzahroh Rojabiyah</td></tr>
          <tr><td></td><td>Berliana Ghesya Desilva</td></tr>
          <tr><td></td><td>Hani fauziyah syaiha</td></tr>
        </tbody>
      </table>
    </div>
  </div>`;
  found = true;
} else if (divisions["Catering"].includes(nimInput)) {
  hasilElement.innerHTML = `<h4 class="congrats">🎉 Selamat! Anda lolos di divisi <strong>Catering</strong> 🎉<br>
  Semangat dalam menjalankan tugasnya!<br>Silahkan masuk ke dalam grup panitia!</h4>
  <a href="https://chat.whatsapp.com/EGxBtgws0u2LHFBEfCddzj"><button class="copybutton">Join Grup Panitia dan Divisi Kamu</button></a>

  <div class="content-card">
    <div class="table-container">
      <table class="division-table">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Captain</td><td>Naquita Zilvia Kaliska</td></tr>
          <tr><td>Vice Captain</td><td>Dio Farah Fauziyyah</td></tr>
          <tr><td>Staff</td><td>Dea Nursifa</td></tr>
          <tr><td></td><td>Zulfa Nurlatifah</td></tr>
          <tr><td></td><td>Nur adila putri</td></tr>
          <tr><td></td><td>Luthfi Bunga Nurmalasari</td></tr>
          <tr><td></td><td>Aulia Tri Diah Kemalasari Irianto</td></tr>
          <tr><td></td><td>Agisna Atiatul Maula</td></tr>
        </tbody>
      </table>
    </div>
  </div>`;
  found = true;
} else if (divisions["Medic"].includes(nimInput)) {
  hasilElement.innerHTML = `<h4 class="congrats">🎉 Selamat! Anda lolos di divisi <strong>Medic</strong> 🎉<br>
  Semangat dalam menjalankan tugasnya!<br>Silahkan masuk ke dalam grup panitia!</h4>
  <a href="https://chat.whatsapp.com/EGxBtgws0u2LHFBEfCddzj"><button class="copybutton">Join Grup Panitia dan Divisi Kamu</button></a>

  <div class="content-card">
    <div class="table-container">
      <table class="division-table">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Captain</td><td>Septiani Nurhayati</td></tr>
          <tr><td>Vice Captain</td><td>Triana Maulida</td></tr>
          <tr><td>Staff</td><td>Egi Setiawan</td></tr>
          <tr><td></td><td>Sherina Gunawan</td></tr>
          <tr><td></td><td>Nafi Nurrohman</td></tr>
          <tr><td></td><td>Ananda Aulia Fauziah</td></tr>
          <tr><td></td><td>Najwa Meylusi Sakuila</td></tr>
          <tr><td></td><td>Aldila Raynaldo Putra</td></tr>
        </tbody>
      </table>
    </div>
  </div>`;
  found = true;
} else if (divisions["Equipment"].includes(nimInput)) {
  hasilElement.innerHTML = `<h4 class="congrats">🎉 Selamat! Anda lolos di divisi <strong>Equipment</strong> 🎉<br>
  Semangat dalam menjalankan tugasnya!<br>Silahkan masuk ke dalam grup panitia!</h4>
  <a href="https://chat.whatsapp.com/EGxBtgws0u2LHFBEfCddzj"><button class="copybutton">Join Grup Panitia dan Divisi Kamu</button></a>

  <div class="content-card">
    <div class="table-container">
      <table class="division-table">
        <thead>
          <tr>
            <th></th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Captain</td><td>Dicky Pinusa Prima Sugondo</td></tr>
          <tr><td>Vice Captain</td><td>Siti Alliyah Zarifa</td></tr>
          <tr><td>Staff</td><td>Rafli Maulana</td></tr>
          <tr><td></td><td>Septia Aminarti</td></tr>
          <tr><td></td><td>Ririn Rindawati</td></tr>
          <tr><td></td><td>Gita Dwiyan</td></tr>
          <tr><td></td><td>Nabila Salsa Azzahra</td></tr>
          </tbody>
        </table>
      </div>
    </div>`;
    found = true;
  } else if (divisions["Guard"].includes(nimInput)) {
    hasilElement.innerHTML = `<h4 class="congrats">🎉 Selamat! Anda lolos di divisi <strong>Medic</strong> 🎉<br>
    Semangat dalam menjalankan tugasnya!<br>Silahkan masuk ke dalam grup panitia!</h4>
    <a href="https://chat.whatsapp.com/EGxBtgws0u2LHFBEfCddzj"><button class="copybutton">Join Grup Panitia dan Divisi Kamu</button></a>

    <div class="content-card">
      <div class="table-container">
        <table class="division-table">
          <thead>
            <tr>
              <th></th>
              <th>Nama</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Captain</td><td>Rica Elisabeth Situmorang</td></tr>
            <tr><td>Vice Captain</td><td>Muhammad Khairul Irham Masruri</td></tr>
            <tr><td>Staff</td><td>Shabri Hawari</td></tr>
            <tr><td></td><td>Arjun Raj Mohan</td></tr>
            <tr><td></td><td>Yasir Ahmadin Moersyid</td></tr>
            <tr><td></td><td>Faiq Tiansyah</td></tr>
            <tr><td></td><td>INDRI MASTI</td></tr>
            <tr><td></td><td>Wisnu Adi Pranata</td></tr>
            <tr><td></td><td>Rafi Hady Alghazy</td></tr>
            <tr><td></td><td>Ahmad Sa'id Abdurrahman</td></tr>
            <tr><td></td><td>Suhaila Fauzi Baktebeh</td></tr>
            <tr><td></td><td>Lili Dwi Aryanti</td></tr>
            <tr><td></td><td>Faris Fathurrohman</td></tr>
            <tr><td></td><td>Laksminawati Agustine Arifin</td></tr>
            <tr><td></td><td>Laila Safira</td></tr>
            <tr><td></td><td>Muhammad Thoriq Salahudin Haryoto</td></tr>            
          </tbody>
        </table>
      </div>
    </div>`;
    found = true;
  }
  if (!found) {
    hasilElement.innerHTML = `<p style="color: #ff9999;">❌ NIM ${nimInput} tidak ditemukan dalam daftar penerimaan.<br>
    Pastikan NIM yang kamu input benar.</p>`;
  }

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("resultModal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("resultModal")) {
    closeModal();
  }
};



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}



/*function copyText() {
  var caption = document.getElementById("caption");
  caption.select();
  caption.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Caption berhasil disalin!");
}


document.addEventListener("DOMContentLoaded", function () {
  const nimInput = document.getElementById("nim");
  if (nimInput) {
    nimInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        cariJadwal();
      }
    });
  }
});

function cariJadwal() {
  const nimInput = document.getElementById("nim").value.trim();
  const hasilElement = document.getElementById("hasilJadwal");
  const modal = document.getElementById("resultModal");

  if (pesertaMapping.hasOwnProperty(nimInput)) {
    const peserta = pesertaMapping[nimInput];
    const whatsappLinks = {
      "Farhan Taqi": "https://wa.me/6281289115829",
      Excel: "https://wa.me/6281779927611",
      Bagas: "https://wa.me/6285348158968",
      Randy: "https://wa.me/6281398544575",
      Ghevira: "https://wa.me/62881011202354",
      Nissa: "https://wa.me/6285890697052",
      Nabila: "https://wa.me/6285692668175",
      Hafidz: "https://wa.me/6289506048783",
    };

    let pesan = `Hai, ${peserta.nama}! Bagaimana kabarnya? 😊\n\n`;
    pesan += `Kamu sudah masuk ke tahapan wawancara nih! Berikut detail jadwalnya:\n\n`;
    pesan += `📅 Jadwal: ${peserta.jadwal}\n`;
    pesan += `👤 Pewawancara: ${peserta.pewawancara}\n\n`;
    pesan += `Apakah kamu ada kesibukan lain atau kelas pada jadwal tersebut? Jika iya, silakan ajukan re-schedule. Baik jika iya atau tidak silahkan konfirmasi jadwalnya! Klik tombol di bawah ini untuk menghubungi pewawancaramu melalui WhatsApp. 📩`;

    hasilElement.innerText = pesan;
    hasilElement.style.color = "white";

    const whatsappLinkBase = whatsappLinks[peserta.pewawancara];
    if (whatsappLinkBase) {
      const message = `Halo, saya ${peserta.nama}. Saya ingin mengkonfirmasi jadwal wawancara untuk *Calon Panitia ISF 2025* pada waktu *${peserta.jadwal}*. Mohon konfirmasinya, terima kasih!`;
      const encodedMessage = encodeURIComponent(message);
      const fullWhatsappLink = `${whatsappLinkBase}?text=${encodedMessage}`;

      const button = document.createElement("a");
      button.href = fullWhatsappLink;
      button.innerText = "Konfirmasi via WhatsApp";
      button.classList.add("copybutton");
      button.setAttribute("target", "_blank");
      button.style.display = "inline-block";
      button.style.marginTop = "10px";
      button.style.padding = "10px 15px";
      button.style.backgroundColor = "#25D366";
      button.style.color = "white";
      button.style.borderRadius = "5px";
      button.style.textDecoration = "none";

      // Hapus tombol lama jika ada sebelum menambahkan yang baru
      const oldButton = hasilElement.querySelector(".copybutton");
      if (oldButton) oldButton.remove();

      hasilElement.appendChild(document.createElement("br"));
      hasilElement.appendChild(button);
    }
  } else {
    hasilElement.innerText = `NIM ${nimInput} tidak ditemukan.`;
    hasilElement.style.color = "#ff9999";
  }

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("resultModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("resultModal");
  if (event.target == modal) {
    closeModal();
  }
};

const pesertaMapping = {
  2307813: {
    nama: "Shabri Hawari",
    pewawancara: "Farhan Taqi",
    jadwal: "Rabu, 13:00 WIB",
  },
  2410137: {
    nama: "Abdus Salam Azzahra",
    pewawancara: "Farhan Taqi",
    jadwal: "Rabu, 13:30 WIB",
  },
  2300540: {
    nama: "Latifah Khairiah",
    pewawancara: "Farhan Taqi",
    jadwal: "Rabu, 14:00 WIB",
  },
  2307745: {
    nama: "Alya Putri Ramadhani",
    pewawancara: "Farhan Taqi",
    jadwal: "Rabu, 14:30 WIB",
  },
  2305322: {
    nama: "Mellisa Aulia Nursiamy",
    pewawancara: "Farhan Taqi",
    jadwal: "Rabu, 15:00 WIB",
  },
  2300395: {
    nama: "Gina Nurhasanah",
    pewawancara: "Farhan Taqi",
    jadwal: "Rabu, 15:30 WIB",
  },
  2405707: {
    nama: "Do'a",
    pewawancara: "Farhan Taqi",
    jadwal: "Rabu, 16:00 WIB",
  },
  2300493: {
    nama: "Arjunraj Mohan",
    pewawancara: "Farhan Taqi",
    jadwal: "Rabu, 16:30 WIB",
  },
  2304830: {
    nama: "Azhara Putri Handayani",
    pewawancara: "Farhan Taqi",
    jadwal: "Kamis, 15:00 WIB",
  },
  2310215: {
    nama: "Nisya Kholifah",
    pewawancara: "Farhan Taqi",
    jadwal: "Kamis, 15:30 WIB",
  },
  2309225: {
    nama: "ALISYA AINUN HIDAYAH",
    pewawancara: "Farhan Taqi",
    jadwal: "Kamis, 16:00 WIB",
  },
  2310582: {
    nama: "Saveria shabrina",
    pewawancara: "Farhan Taqi",
    jadwal: "Kamis, 16:30 WIB",
  },
  2306309: {
    nama: "Febby Deca Lestari",
    pewawancara: "Farhan Taqi",
    jadwal: "Kamis, 17:00 WIB",
  },
  2410478: {
    nama: "Sefia Jihan Dwisaputri",
    pewawancara: "Farhan Taqi",
    jadwal: "Kamis, 17:30 WIB",
  },
  2402764: {
    nama: "ALDILA RAYNALDO PUTRA",
    pewawancara: "Excel",
    jadwal: "Rabu, 13:00 WIB",
  },
  2307539: {
    nama: "INDRI MASTI",
    pewawancara: "Excel",
    jadwal: "Rabu, 13:30 WIB",
  },
  2305817: {
    nama: "Hiroshi Qashdus Sabil Sulaeman",
    pewawancara: "Excel",
    jadwal: "Rabu, 14:00 WIB",
  },
  2400545: {
    nama: "TOGAR MEIPITER CHRISTOPHER SINURAT",
    pewawancara: "Excel",
    jadwal: "Rabu, 14:30 WIB",
  },
  2311720: {
    nama: "Faris Fathurrohman",
    pewawancara: "Excel",
    jadwal: "Rabu, 15:00 WIB",
  },
  2304216: {
    nama: "Laksminawati Agustine Arifin",
    pewawancara: "Excel",
    jadwal: "Rabu, 15:30 WIB",
  },
  2306093: {
    nama: "Triana Maulida",
    pewawancara: "Excel",
    jadwal: "Rabu, 16:00 WIB",
  },
  2405929: {
    nama: "Yasir ahmadin moersyid",
    pewawancara: "Excel",
    jadwal: "Rabu, 16:30 WIB",
  },
  2410015: {
    nama: "DICKY PINUSA PRIMA SUGONDO",
    pewawancara: "Excel",
    jadwal: "Kamis, 15:00 WIB",
  },
  2401798: {
    nama: "Septiani Nurhayati",
    pewawancara: "Excel",
    jadwal: "Kamis, 15:30 WIB",
  },
  2410126: {
    nama: "Najwa Meylusi Sakuila",
    pewawancara: "Excel",
    jadwal: "Kamis, 16:00 WIB",
  },
  2401662: {
    nama: "Nabilla Hafizah Zahra",
    pewawancara: "Excel",
    jadwal: "Kamis, 16:30 WIB",
  },
  2409154: {
    nama: "Hani fauziyah syaiha",
    pewawancara: "Excel",
    jadwal: "Kamis, 17:00 WIB",
  },
  2403125: {
    nama: "Chika Maulia Apriatin",
    pewawancara: "Excel",
    jadwal: "Kamis, 17:30 WIB",
  },
  2405840: {
    nama: "Kenji Ahmad Darelly",
    pewawancara: "Excel",
    jadwal: "Rabu, 13:00 WIB",
  },
  2311641: {
    nama: "Wisnu Adi Pranata",
    pewawancara: "Bagas",
    jadwal: "Rabu, 13:00 WIB",
  },
  2307151: {
    nama: "Rafi Hady Alghazy",
    pewawancara: "Bagas",
    jadwal: "Rabu, 13:30 WIB",
  },
  2311137: {
    nama: "Ahmad Sa'id Abdurrahman",
    pewawancara: "Bagas",
    jadwal: "Rabu, 14:00 WIB",
  },
  2309758: {
    nama: "Chairin Zahra",
    pewawancara: "Bagas",
    jadwal: "Rabu, 14:30 WIB",
  },
  2301018: {
    nama: "Rifal Fadli Ananda",
    pewawancara: "Bagas",
    jadwal: "Rabu, 15:00 WIB",
  },
  2311636: { nama: "Shafwan", pewawancara: "Bagas", jadwal: "Rabu, 15:30 WIB" },
  2307243: {
    nama: "Dio Farah Fauziyyah",
    pewawancara: "Bagas",
    jadwal: "Rabu, 16:00 WIB",
  },
  2309599: {
    nama: "Siti Aliyyah Zarifa",
    pewawancara: "Bagas",
    jadwal: "Rabu, 16:30 WIB",
  },
  2308244: {
    nama: "Anggun Nur Andiany Wiyoso",
    pewawancara: "Bagas",
    jadwal: "Kamis, 15:00 WIB",
  },
  2409126: {
    nama: "Gita Dwiyan",
    pewawancara: "Bagas",
    jadwal: "Kamis, 15:30 WIB",
  },
  2405857: {
    nama: "Naila Adila Mawaddah",
    pewawancara: "Bagas",
    jadwal: "Kamis, 16:00 WIB",
  },
  2402270: {
    nama: "Nafi Nurrohmah",
    pewawancara: "Bagas",
    jadwal: "Kamis, 16:30 WIB",
  },
  2401518: {
    nama: "Septia Aminarti",
    pewawancara: "Bagas",
    jadwal: "Kamis, 17:00 WIB",
  },
  2400393: {
    nama: "Ananda Aulia Fauziah",
    pewawancara: "Bagas",
    jadwal: "Kamis, 17:30 WIB",
  },
  2400965: {
    nama: "Lili Dwi Aryanti",
    pewawancara: "Bagas",
    jadwal: "Rabu, 17:00 WIB",
  },
  2402756: {
    nama: "Aulia Aufa Zahron",
    pewawancara: "Randy",
    jadwal: "Rabu, 09:00 WIB",
  },
  2400867: {
    nama: "Reifana Muhamad Al Kindi",
    pewawancara: "Randy",
    jadwal: "Rabu, 09:30 WIB",
  },
  2404364: {
    nama: "RAFLI MAULANA",
    pewawancara: "Randy",
    jadwal: "Rabu, 10:00 WIB",
  },
  2403154: {
    nama: "Muhammad Thoriq Salahudin Haryoto",
    pewawancara: "Randy",
    jadwal: "Rabu, 10:30 WIB",
  },
  2401920: {
    nama: "Soraya Farhana",
    pewawancara: "Randy",
    jadwal: "Rabu, 11:00 WIB",
  },
  2401632: {
    nama: "Rica Elisabeth Situmorang",
    pewawancara: "Randy",
    jadwal: "Kamis, 13:30 WIB",
  },
  2401228: {
    nama: "Elit Siti Nurbayah Maulidya",
    pewawancara: "Randy",
    jadwal: "Kamis, 14:00 WIB",
  },
  2401401: {
    nama: "Dwiky Jerryan Koryanto Muhammad",
    pewawancara: "Randy",
    jadwal: "Kamis, 14:30 WIB",
  },
  2408087: {
    nama: "Ainuzzahroh Rojabiyah",
    pewawancara: "Randy",
    jadwal: "Kamis, 15:00 WIB",
  },
  2408191: {
    nama: "Naila Tsuraya Zahra",
    pewawancara: "Randy",
    jadwal: "Kamis, 15:30 WIB",
  },
  2407447: {
    nama: "Zulpa Awaliyatul Padliyah",
    pewawancara: "Randy",
    jadwal: "Kamis, 16:00 WIB",
  },
  2409073: {
    nama: "AMANDA NURULAZMI",
    pewawancara: "Randy",
    jadwal: "Kamis, 16:30 WIB",
  },
  2404145: {
    nama: "Berliana Ghesya Desilva",
    pewawancara: "Randy",
    jadwal: "Kamis, 17:00 WIB",
  },
  2406256: {
    nama: "Muhammad Daffa Haaditiansyah",
    pewawancara: "Randy",
    jadwal: "Kamis, 17:30 WIB",
  },
  2401121: {
    nama: "egi setiawan",
    pewawancara: "Randy",
    jadwal: "Rabu, 08:30 WIB",
  },
  2410073: {
    nama: "Burhan Abdur Rahman",
    pewawancara: "Randy",
    jadwal: "Rabu, 11:30 WIB",
  },
  2301624: {
    nama: "Caroline Rotua Joesputri Samosir",
    pewawancara: "Ghevira",
    jadwal: "Rabu, 13:00 WIB",
  },
  2404973: {
    nama: "Putri Ayu Resfani",
    pewawancara: "Ghevira",
    jadwal: "Rabu, 13:30 WIB",
  },
  2404401: {
    nama: "Potjoet Syarifah Malahayati",
    pewawancara: "Ghevira",
    jadwal: "Rabu, 14:00 WIB",
  },
  2405645: {
    nama: "Muhammad Raffi Akhdan",
    pewawancara: "Ghevira",
    jadwal: "Rabu, 14:30 WIB",
  },
  2402765: {
    nama: "DAVINA SHAFA FELISHA",
    pewawancara: "Ghevira",
    jadwal: "Rabu, 15:00 WIB",
  },
  2410559: {
    nama: "Anwar Hidayat",
    pewawancara: "Ghevira",
    jadwal: "Rabu, 15:30 WIB",
  },
  2402023: {
    nama: "Muhammad Khairul Irham Masruri",
    pewawancara: "Ghevira",
    jadwal: "Rabu, 16:00 WIB",
  },
  2403096: {
    nama: "Annisa Hukma Shobiyya",
    pewawancara: "Ghevira",
    jadwal: "Rabu, 16:30 WIB",
  },
  2400686: {
    nama: "Saskia Shofawatunnisa",
    pewawancara: "Ghevira",
    jadwal: "Kamis, 15:00 WIB",
  },
  2401825: {
    nama: "Dwiana May Astiningsih",
    pewawancara: "Ghevira",
    jadwal: "Kamis, 15:30 WIB",
  },
  2403871: {
    nama: "Hasna Amelia Nurzaki",
    pewawancara: "Ghevira",
    jadwal: "Kamis, 16:00 WIB",
  },
  2402165: {
    nama: "DEA NURSIFA",
    pewawancara: "Ghevira",
    jadwal: "Kamis, 16:30 WIB",
  },
  2400991: {
    nama: "Phebe Febriella Efarina Sirno",
    pewawancara: "Ghevira",
    jadwal: "Kamis, 17:00 WIB",
  },
  2408135: {
    nama: "Nazwa Febriani",
    pewawancara: "Ghevira",
    jadwal: "Kamis, 17:30 WIB",
  },
  2404968: {
    nama: "Exsa Evelin Tampubolon",
    pewawancara: "Nissa",
    jadwal: "Rabu, 13:00 WIB",
  },
  2408982: {
    nama: "Siti Nur Azizah",
    pewawancara: "Nissa",
    jadwal: "Rabu, 13:30 WIB",
  },
  2404966: {
    nama: "Siti Shofa",
    pewawancara: "Nissa",
    jadwal: "Rabu, 14:00 WIB",
  },
  2407796: {
    nama: "Najwa Meiga Azzahra",
    pewawancara: "Nissa",
    jadwal: "Rabu, 14:30 WIB",
  },
  2404812: {
    nama: "Ismawatus Nurul Fadhillah",
    pewawancara: "Nissa",
    jadwal: "Kamis, 19:00 WIB",
  },
  2404685: {
    nama: "Maya Aulia Kusuma",
    pewawancara: "Nissa",
    jadwal: "Kamis, 19:30 WIB",
  },
  2310633: {
    nama: "Haditio Sri Ramadhan",
    pewawancara: "Nissa",
    jadwal: "Kamis, 20:00 WIB",
  },
  2407773: {
    nama: "AULIA TRI DIAH KEMALASARI IRIANTO",
    pewawancara: "Nissa",
    jadwal: "Kamis, 20:30 WIB",
  },
  2400982: {
    nama: "MARTINA EVANGELIA SIANTURI",
    pewawancara: "Nissa",
    jadwal: "Kamis, 15:00 WIB",
  },
  2401346: {
    nama: "Zulfa Nurlatifah",
    pewawancara: "Nissa",
    jadwal: "Kamis, 15:30 WIB",
  },
  2402916: {
    nama: "Nur adila putri",
    pewawancara: "Nissa",
    jadwal: "Kamis, 16:00 WIB",
  },
  2409793: {
    nama: "Naquita Zilvia Kaliska",
    pewawancara: "Nissa",
    jadwal: "Kamis, 16:30 WIB",
  },
  2407802: {
    nama: "Agisna Atiatul Maula",
    pewawancara: "Nissa",
    jadwal: "Kamis, 17:00 WIB",
  },
  2400903: {
    nama: "Luthfi Bunga Nurmalasari",
    pewawancara: "Nissa",
    jadwal: "Kamis, 17:30 WIB",
  },
  2402722: {
    nama: "amirul Muhammad Rabbani",
    pewawancara: "Nabila",
    jadwal: "Rabu, 16:00 WIB",
  },
  2405122: {
    nama: "Rizqi Abdan",
    pewawancara: "Nabila",
    jadwal: "Rabu, 16:30 WIB",
  },
  2407290: {
    nama: "Fathin Tsamratul Fu'adah",
    pewawancara: "Nabila",
    jadwal: "Rabu, 17:00 WIB",
  },
  2401249: {
    nama: "Bayu Aji Wahyu Utomo",
    pewawancara: "Nabila",
    jadwal: "Rabu, 17:30 WIB",
  },
  2402822: {
    nama: "Citra Sya'bani Agustin",
    pewawancara: "Nabila",
    jadwal: "Rabu, 19:00 WIB",
  },
  2403287: {
    nama: "MUHAMMAD RIYU SAPUTRA",
    pewawancara: "Nabila",
    jadwal: "Rabu, 19:30 WIB",
  },
  2402730: {
    nama: "Kaylla Asyifa",
    pewawancara: "Nabila",
    jadwal: "Rabu, 20:00 WIB",
  },
  2403160: {
    nama: "Achmad Choeron",
    pewawancara: "Nabila",
    jadwal: "Rabu, 20:30 WIB",
  },
  2409582: {
    nama: "Nirma Dwi Suci Ramadhani",
    pewawancara: "Nabila",
    jadwal: "Kamis, 15:00 WIB",
  },
  2405871: {
    nama: "Fahrel Sanjaya",
    pewawancara: "Nabila",
    jadwal: "Kamis, 15:30 WIB",
  },
  2402620: {
    nama: "Tazqiyah Rimba Mazid Nugraha",
    pewawancara: "Nabila",
    jadwal: "Kamis, 16:00 WIB",
  },
  2405977: {
    nama: "Nabila Salsa Azzahra",
    pewawancara: "Nabila",
    jadwal: "Kamis, 16:30 WIB",
  },
  2405990: {
    nama: "Dewi Anjani praharanti",
    pewawancara: "Nabila",
    jadwal: "Kamis, 17:00 WIB",
  },
  2401020: {
    nama: "Septiana putri",
    pewawancara: "Nabila",
    jadwal: "Kamis, 17:30 WIB",
  },
  2404827: {
    nama: "Annisa Salsabila",
    pewawancara: "Hafidz",
    jadwal: "Rabu, 13:00 WIB",
  },
  2407218: {
    nama: "SYIFA AWALIA",
    pewawancara: "Hafidz",
    jadwal: "Rabu, 13:30 WIB",
  },
  2402855: { nama: "Misar", pewawancara: "Hafidz", jadwal: "Rabu, 14:00 WIB" },
  2400817: {
    nama: "Asep Sulaeman",
    pewawancara: "Hafidz",
    jadwal: "Rabu, 14:30 WIB",
  },
  2403223: {
    nama: "Ariel Dwika Nugraha",
    pewawancara: "Hafidz",
    jadwal: "Rabu, 15:00 WIB",
  },
  2409856: {
    nama: "Sayyidah Muthiara Kamillah",
    pewawancara: "Hafidz",
    jadwal: "Rabu, 15:30 WIB",
  },
  2400920: {
    nama: "Muhammad Rifa Ardhan",
    pewawancara: "Hafidz",
    jadwal: "Rabu, 16:00 WIB",
  },
  2404287: {
    nama: "Dhavin Radithya Dhuha",
    pewawancara: "Hafidz",
    jadwal: "Rabu, 16:30 WIB",
  },
  2404134: {
    nama: "Ririn Rindawati",
    pewawancara: "Hafidz",
    jadwal: "Kamis, 15:00 WIB",
  },
  2407976: {
    nama: "iqbal novianto",
    pewawancara: "Hafidz",
    jadwal: "Kamis, 15:30 WIB",
  },
  2404021: {
    nama: "raysha happy",
    pewawancara: "Hafidz",
    jadwal: "Kamis, 16:00 WIB",
  },
  2407399: {
    nama: "Nurjihan Rizky Thahira",
    pewawancara: "Hafidz",
    jadwal: "Kamis, 16:30 WIB",
  },
  2402063: {
    nama: "Sherina Gunawan",
    pewawancara: "Hafidz",
    jadwal: "Kamis, 17:00 WIB",
  },
  2406443: {
    nama: "LAILA SAFIRA",
    pewawancara: "Hafidz",
    jadwal: "Kamis, 17:30 WIB",
  },
};
*/
/** */