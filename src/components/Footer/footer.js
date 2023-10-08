import React from 'react'
import './footer.css'

function footer() {
  return (
    <section id="footer">
        <div class="footerTitle">
            <p>Get in touch with me.</p>
        </div>

        <table class="row skills">
            <tr>
                <td class="column tech">
                    <i class="fa-brands fa-linkedin"></i>
                </td>
                <td class="column tech">
                    <img className="techSpec" src=""  alt="" />
                </td>
                <td class="column tech">
                    <img className="techSpec" src="" alt="" />
                </td>
            </tr>
        </table>
    </section>
  )
}

export default footer