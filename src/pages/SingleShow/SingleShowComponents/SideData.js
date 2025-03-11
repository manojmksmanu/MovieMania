import React from "react";
import "./style.css";

const SideData = ({ data }) => {
  if (!data) return null;

  // Format currency with commas
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="side-data-wrapper">
      <h3 className="side-data-header">Movie Details</h3>
      <div className="side-data-content">
        <div className="side-data-grid">
          {data.status && (
            <div className="side-data-item">
              <div className="side-data-label">Status</div>
              <div className="side-data-value">{data.status}</div>
            </div>
          )}

          {data.budget > 0 && (
            <div className="side-data-item">
              <div className="side-data-label">Budget</div>
              <div className="side-data-value">
                {formatCurrency(data.budget)}
              </div>
            </div>
          )}

          {data.revenue > 0 && (
            <div className="side-data-item">
              <div className="side-data-label">Revenue</div>
              <div className="side-data-value">
                {formatCurrency(data.revenue)}
              </div>
            </div>
          )}

          {data.popularity && (
            <div className="side-data-item">
              <div className="side-data-label">Popularity</div>
              <div className="side-data-value">
                {data.popularity.toFixed(1)}
              </div>
            </div>
          )}

          {data.runtime && (
            <div className="side-data-item">
              <div className="side-data-label">Runtime</div>
              <div className="side-data-value">
                {Math.floor(data.runtime / 60)}h {data.runtime % 60}m
              </div>
            </div>
          )}

          {data.release_date && (
            <div className="side-data-item">
              <div className="side-data-label">Release Date</div>
              <div className="side-data-value">
                {new Date(data.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          )}

          {data.vote_average !== undefined && (
            <div className="side-data-item">
              <div className="side-data-label">Rating</div>
              <div className="rating-container">
                <div
                  className="rating-circle"
                  style={{
                    background: `conic-gradient(
                      #e50914 ${data.vote_average * 10}%, 
                      #2c2c2c ${data.vote_average * 10}% 100%
                    )`,
                  }}
                >
                  <span>{data.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {data.networks && data.networks.length > 0 && (
          <div className="side-data-item full-width">
            <div className="side-data-label">Networks</div>
            <div className="networks-container">
              {data.networks.map((network) => (
                <img
                  key={network.id}
                  className="network-logo"
                  src={`https://image.tmdb.org/t/p/w200${network.logo_path}`}
                  alt={network.name}
                  title={network.name}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideData;
