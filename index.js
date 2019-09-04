const formatDate = timeInSeconds => {
   const hours = Math.floor(timeInSeconds / 3600);
   const minutes = Math.floor((timeInSeconds % 3600) / 60);
   const seconds = Math.floor(timeInSeconds % 60);

   if (!timeInSeconds) return '0s';
   else if (timeInSeconds < 60) return `${seconds}s`;
   else if (timeInSeconds < 3600 && seconds == 0) return `${minutes}m`;
   else if (timeInSeconds < 3600 && seconds > 0) return `${minutes}m ${seconds}s`;
   else if (timeInSeconds >= 3600 && seconds == 0 && minutes == 0) return `${hours}h`;
   else if (timeInSeconds >= 3600 && seconds == 0) return `${hours}h ${minutes}m`;
   else if (timeInSeconds >= 3600 && minutes == 0) return `${hours}h ${seconds}s`;
   else return `${hours}h ${minutes}m ${seconds}s`;
};

module.exports = formatDate;
