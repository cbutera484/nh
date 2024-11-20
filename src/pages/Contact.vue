<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const forms = document.querySelectorAll(".needs-validation");
  const result = document.getElementById("result");
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();

          form.querySelectorAll(":invalid")[0].focus();
        } else {
          /*
           * Form Submission using fetch()
           */

          const formData = new FormData(form);
          event.preventDefault();
          event.stopPropagation();
          const object = {};
          formData.forEach((value, key) => {
            object[key] = value;
          });
          const json = JSON.stringify(object);
          result.innerHTML = "Please wait...";

          fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: json,
          })
            .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                result.innerHTML = json.message;
                result.classList.remove("text-gray-500");
                result.classList.add("text-green-500");
              } else {
                console.log(response);
                result.innerHTML = json.message;
                result.classList.remove("text-gray-500");
                result.classList.add("text-red-500");
              }
            })
            .catch((error) => {
              console.log(error);
              result.innerHTML = "Something went wrong!";
            })
            .then(function () {
              form.reset();
              form.classList.remove("was-validated");
            });
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
});
</script>
<template>
  <div class="content">
    <div class="container mx-auto">
      <div class="max-w-2xl mx-auto bg-white p-5 rounded-md shadow-sm">
        <div class="text-center">
          <h1>Contact Us</h1>
          <p class="text-black-400">
            Fill up the form below to send us a message.
          </p>
        </div>
        <div class="m-7">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
            class="needs-validation"
            novalidate
          >
            <input
              type="hidden"
              name="access_key"
              value="b57d8803-27c6-481b-9e67-8894069a9367"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />
            <input
              type="checkbox"
              name="botcheck"
              id=""
              style="display: none"
            />

            <div class="md:flex mb-6 md:space-x-4">
              <div class="w-full md:w-1/2">
                <label for="fname" class="block mb-2 text-sm text-gray-600"
                  >First Name</label
                >
                <input
                  type="text"
                  name="name"
                  id="first_name"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
                <div
                  class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
                >
                  Please provide your first name.
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <label for="lname" class="block mb-2 text-sm text-gray-600"
                  >Last Name</label
                >
                <input
                  type="text"
                  name="last_name"
                  id="lname"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
                <div
                  class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
                >
                  Please provide your last name.
                </div>
              </div>
            </div>

            <div class="flex mb-6 space-x-4">
              <div class="w-full lg:w-3/4">
                <label for="email" class="block mb-2 text-sm text-gray-600"
                  >Email Address</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
                <div class="empty-feedback text-red-400 text-sm mt-1">
                  Please provide your email address.
                </div>
                <div class="invalid-feedback text-red-400 text-sm mt-1">
                  Please provide a valid email address.
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label for="message" class="block mb-2 text-sm text-gray-600"
                >Your Message</label
              >

              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Your Message"
                class="w-full px-3 py-2 placeholder-gray-300 border-2 border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                required
              ></textarea>
              <div
                class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
              >
                Please enter your message.
              </div>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
            <p class="text-base text-center text-gray-400" id="result"></p>
          </form>
        </div>
      </div>
    </div>
    <div class="address-phone">
      <h2 class="text-base md:text-xl">Huntington Village Cooperative</h2>
      <p>38 Nathan Hale Drive</p>
      <p>Huntington, NY 11743</p>
      <p><strong>631-427-6099</strong> (phone)</p>
      <p><strong>631-427-6130</strong> (fax)</p>

      <h2>Emergency call line</h2>
      <p class="max-w-2xl text-left m-auto p-5">
        Our emergency call number is
        <strong>1-800-684-4055</strong>. When calling in an emergency, please be
        very specific and detailed. If the representative asks if this a true
        emergency and you feel it is, please let them know that you exactly what
        you need.
      </p>
    </div>
  </div>
</template>

<style scoped>
.invalid-feedback,
.empty-feedback {
  display: none;
}

input,
textarea {
  background: #fff;
}

.address-phone {
  text-align: center;
}

.was-validated :placeholder-shown:invalid ~ .empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
h2 {
  margin-top: 2rem;
}
</style>
