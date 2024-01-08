import React from 'react'

const Overview = () => {
  return (
    <section className="overview-wrapper">
    <div className="overview">
        <div className="overview__title">Overview</div>
        <div className="overview__filter">
            <span>Last month</span>
            <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svg-chevron-down-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
    </div>
    <div className="overview-cards">

        <div className="cards__card">
            <div className="card__header">
                <div className="title">Total Orders</div>
            </div>
            <div className="card__body">
                <div className="amount">231</div>
            </div>
        </div>
        <div className="cards__card">
            <div className="card__header">
                <div className="title">Amount Received</div>
            </div>
            <div className="card__body">
                <div className="amount">₹23,92,312.19</div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Overview