import Swal from 'sweetalert2';
import videoSrc from '../images/help.mp4';

function showNotification() {
  setTimeout(() => {
    Swal.fire({
      title: 'Important message',
      html: `
        <div>
          <video width="560" height="315" autoplay controls>
            <source src="${videoSrc}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      `,
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: "Don't want to help",
      showConfirmButton: true,
      confirmButtonText: 'I want to help',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    });
  }, 15000);
}

export default showNotification;
