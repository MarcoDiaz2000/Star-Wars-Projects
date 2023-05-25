import Swal from 'sweetalert2';

function showNotification() {
  setTimeout(() => {
    Swal.fire({
      title: 'Important message',
      html: `
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/CHmABI0MmkA?autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      `,
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: "Don't want to help",
      showConfirmButton: true,
      confirmButtonText: 'I want to help',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    });
  }, 18000);
}

export default showNotification;
