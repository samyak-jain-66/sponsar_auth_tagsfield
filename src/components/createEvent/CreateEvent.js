import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CreateEvent.css";

class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
      eventName: "",
      category: "",
      timeZone: "",
      price: "",
      jobs: "",
      time: "",
      space: "",
      tags: "",
      description: "",
      eventType: "",
      contact: "",
      image: "",
      gallery: "",
      video: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
  }
  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }
  componentDidMount() {
    const tagContainer = document.querySelector(".tag-container");
    const input = document.querySelector(".tag-container input");

    let tags = [];

    function createTag(label) {
      const div = document.createElement("div");
      div.setAttribute("class", "tag");
      const span = document.createElement("span");
      span.innerHTML = label;
      const closeIcon = document.createElement("i");
      closeIcon.innerHTML = "close";
      closeIcon.setAttribute("class", "material-icons");
      closeIcon.setAttribute("data-item", label);
      div.appendChild(span);
      div.appendChild(closeIcon);
      return div;
    }

    function clearTags() {
      document.querySelectorAll(".tag").forEach((tag) => {
        tag.parentElement.removeChild(tag);
      });
    }

    function addTags() {
      clearTags();
      tags
        .slice()
        .reverse()
        .forEach((tag) => {
          tagContainer.prepend(createTag(tag));
        });
    }

    input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        e.target.value.split(",").forEach((tag) => {
          tags.push(tag);
        });

        addTags();
        input.value = "";
      }
    });
    document.addEventListener("click", (e) => {
      console.log(e.target.tagName);
      if (e.target.tagName === "I") {
        const tagLabel = e.target.getAttribute("data-item");
        const index = tags.indexOf(tagLabel);
        tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
        addTags();
      }
    });

    input.focus();
  }
  render() {
    return (
      <div className="container">
        <div className="heading">
          <h2>Basic Information</h2>
        </div>
        <div className="form">
          <form>
            <label for="eventName">Event Name</label>
            <span className="star">*</span>
            <input type="text" id="eventName" name="eventName" />
            <br />
            <label for="category">Category</label>
            <span className="star">*</span>
            <input list="category" name="category" id="category" />
            <datalist id="browsers">
              <option value="Sports"></option>
              <option value="Theatre"></option>
              <option value="Music"></option>
              <option value="Dance"></option>
              <option value="Outdoor"></option>
              <option value="Community"></option>
              <option value="Film"></option>
              <option value="Walking"></option>
              <option value="Shopping and Retail"></option>
              <option value="Other"></option>
            </datalist>
            <br />
            <label for="timeZone">Time Zone</label>
            <input type="time" id="timeZone" name="timeZone" />
            <br />
            <div className="price-css">
              <label for="price">Price</label>
              <div className="tag-container">
                <input type="text" id="price" name="price" />
              </div>
            </div>
            <br />
            <label for="job">Job</label>
            <input type="text" id="job" name="job" />
            <br />
            <label for="time">Time</label>
            <input type="text" id="time" name="time" />
            <br />
            <label for="space">Space</label>
            <input type="text" id="space" name="space" />
            <br />
            <label for="tags">Tags</label>
            <input type="text" id="tags" name="tags" />
            <br />
            <h2>Event Type</h2>
            <br />
            <input
              type="radio"
              id="Physical Location"
              name="eventType"
              value="Physical Location"
            />
            <label for="Physical Location">Physical Location</label>
            <input type="radio" id="online" name="eventType" value="Online" />
            <label for="online">Online</label>
            <br />
            <label for="contact">Contact</label>
            <input type="tel" id="contact" name="contact"></input>
            <br />
            <label for="image">Image Feature</label>
            <br />
            <input type="file" id="image" name="image"></input>
            <br />
            <label for="gallery">Gallery</label>
            <br />
            <input type="file" id="gallery" name="gallery"></input>
            <br />
            <label for="videos">Videos</label>
            <br />
            <input type="url" id="videos" name="videos"></input>
            <br />
          </form>
        </div>
      </div>
    );
  }
}
export default CreateEvent;
