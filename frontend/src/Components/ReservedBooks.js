import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Pritam</td>
                    <td>Lucent</td>
                    <td>18/08/2023</td>
                </tr>
                <tr>
                    <td>Pritam</td>
                    <td>Lucent</td>
                    <td>18/08/2023</td>
                </tr>
                <tr>
                    <td>Pritam</td>
                    <td>Lucent</td>
                    <td>18/08/2023</td>
                </tr>
                <tr>
                    <td>Pritam</td>
                    <td>Lucent</td>
                    <td>18/08/2023</td>
                </tr>
                <tr>
                    <td>Pritam</td>
                    <td>Lucent</td>
                    <td>18/08/2023</td>
                </tr>
                <tr>
                    <td>Pritam</td>
                    <td>Lucent</td>
                    <td>18/08/2023</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
