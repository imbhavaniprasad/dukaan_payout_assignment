import React from 'react'

const Transactions = () => {
  return (
    <section className="transactions">
    <div className="transactions__title">Transactions | This Month</div>

    <div className="transactions__table">
        <div className="table__header">
            <div className="table__search">
                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svg-search-icon">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input type="text" placeholder="Search by Order ID..."/>
            </div>
            <div className="table__actions">
                <div className="sort">
                    Sort
                    <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        className="svg-up-down-icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                </div>
                <div className="download">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="svg-download-tray-icon">
                        <path fill-rule="evenodd"
                            d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                            clip-rule="evenodd" />
                    </svg>

                </div>
            </div>
        </div>

        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th style={{display:"flex",gap:'4px'}}>Order date
                            <span>        
<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z" fill="#4D4D4D"/>
</svg>
</span></th>
                        <th>Order amount</th>
                        <th style={{display:"flex",gap:'4px',justifyContent: 'flex-end'}}>Transaction fees<span style={{display:'flex',alignItems:'center'}}>

<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_5817)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z" fill="#4D4D4D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z" fill="#4D4D4D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z" fill="#4D4D4D"/>
</g>
<defs>
<clipPath id="clip0_0_5817">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg></span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td-date">#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1278.23</td>
                        <td>₹22</td>
                    </tr>
                    <tr>
                        <td className="td-date">#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1278.23</td>
                        <td>₹22</td>
                    </tr>
                    <tr>
                        <td className="td-date">#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1278.23</td>
                        <td>₹22</td>
                    </tr>
                    <tr>
                        <td className="td-date">#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1278.23</td>
                        <td>₹22</td>
                    </tr>
                    <tr>
                        <td className="td-date">#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1278.23</td>
                        <td>₹22</td>
                    </tr>
                    <tr>
                        <td className="td-date">#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1278.23</td>
                        <td>₹22</td>
                    </tr>
                    <tr>
                        <td className="td-date">#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1278.23</td>
                        <td>₹22</td>
                    </tr>
                    <tr>
                        <td className="td-date">#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1278.23</td>
                        <td>₹22</td>
                    </tr>
                    <tr>
                        <td className="td-date">#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1278.23</td>
                        <td>₹22</td>
                    </tr>
                    <tr>
                        <td className="td-date">#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1278.23</td>
                        <td>₹22</td>
                    </tr>
                    <tr>
                        <td className="td-date">#281209</td>
                        <td>7 July, 2023</td>
                        <td>₹1278.23</td>
                        <td>₹22</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="pagination">
        <div className="prev_pagination">
<svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.78033 0.96967C5.48744 0.676777 5.01256 0.676777 4.71967 0.96967L0.21967 5.46967C0.0790172 5.61032 -9.53674e-07 5.80109 -9.53674e-07 6C-9.53674e-07 6.19891 0.0790172 6.38968 0.21967 6.53033L4.71967 11.0303C5.01256 11.3232 5.48744 11.3232 5.78033 11.0303C6.07322 10.7374 6.07322 10.2626 5.78033 9.96967L1.81066 6L5.78033 2.03033C6.07322 1.73744 6.07322 1.26256 5.78033 0.96967Z" fill="#4D4D4D"/>
</svg>
<span>Previous</span>
        </div>
        <div className="index_pagination">
<p>1</p>
<p>...</p>
<p className='active'>1</p>
<p>10</p>
<p>11</p>
<p>12</p>
<p>13</p>
<p>14</p>
<p>15</p>
<p>16</p>
<p>17</p>
<p>18</p>
</div>
        <div className="next_pagination">
<span>Next</span>
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z" fill="#4D4D4D"/>
</svg>

        </div>
        </div>
    </div>
</section>
  )
}

export default Transactions