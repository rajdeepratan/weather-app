import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="weather-info">
        {
          this.props.city && this.props.country && <p className="weather-key">Location:
            <span className="weather-value"> {this.props.city}, {this.props.country}</span>
          </p>
        }
        {
          this.props.temperature && <p className="weather-key">Temperature:
            <span className="weather-value"> {this.props.temperature}ºC</span>
          </p>
        }
        {
          this.props.humidity && <p className="weather-key">Humidity:
            <span className="weather-value"> {this.props.humidity}%</span>
          </p>
        }
        {
          this.props.description && <p className="weather-key">Conditions:
            <span className="weather-value"> {this.props.description}</span>
          </p>
        }
        {
          this.props.description && <p className="weather-key">Wind:
            <span className="weather-value"> {this.props.degree}º, {this.props.speed}km/h</span>
          </p>
        }
        {
          this.props.error && <p className="weather-key">{this.props.error}</p>
        }
      </div>
    );
  }
}

export default Weather;
