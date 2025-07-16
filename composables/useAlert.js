import swal from 'sweetalert2';

export function useAlert() {
  const showAlert = (title, text, icon = 'info', confirmButtonText = 'OK') => {
    return swal.fire({
      title,
      text,
      icon,
      confirmButtonText,
    });
  };

  const showError = (text) => {
    return showAlert('Error', text, 'error');
  };

  const showSuccess = (text) => {
    return showAlert('Success', text, 'success');
  };

  return {
    showAlert,
    showError,
    showSuccess,
  };
}