import React, { Component } from "react";

export default class Checkout extends Component {
      render() {
        const font = {
            size: "50px",
            fontFamily: "Georgia"
        };
        return (
          <div className="container">
                <div className="center">
                    <h1 style={font}>Thank you for purchase</h1>
                      <iframe src="https://giphy.com/embed/JlpjgShzDsrMIyFu5U" width="800" height="800" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
          </div>
        );
      }
    }