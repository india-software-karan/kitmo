function editProfile() {
  var moreInfo = document.getElementById("more-info");
  moreInfo.style.display = "none";
  alert("wait for next update");
}

const generateProfile = async () => {
  const profileDetailes = document.getElementById("profile_detailes");
  const response = await apiCallGet(`${urls}/users/user`);
  const { username, mobile, email, address } = response.data;

  if (response.data.lenght !== 0) {
    return (profileDetailes.innerHTML = `      
    <div class="image">
        <img
          src="../../image/userimage.jpg"
          alt="Profile Picture"
          class="profile-img"
        />
      </div>

      <h1 class="name">${username}</h1>
      <button onclick="editProfile()">Edit Profile</button>
      <div class="show_more" id="more-info">
        <p>Additional information</p>
        <div class="phone">
          <span>phone number :</span><span>${mobile}</span>
        </div>
        <div class="email"><span>Email :</span><span>${email}</span></div>
        <div class="address">
          <span>Address :</span>
          <address>${address[0].address}</address>
        </div>
    </div>`);
  }
};
