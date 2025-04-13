import React from 'react'

function Contact() {
  return (
    <>
    <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card shadow">
        <div class="card-header text-center bg-dark text-white">
          <h4>Contact Us</h4>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone Number</label>
              <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number"/>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Subject</label>
              <textarea class="form-control" id="message" rows="4" placeholder="Your message"></textarea>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="4" placeholder="Your message"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary px-4">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Contact
