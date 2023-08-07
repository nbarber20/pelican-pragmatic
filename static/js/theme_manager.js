function setDefaultColorScheme() {
  var override = localStorage.getItem('useTheme');
  if (override === 'dark' || override === 'light')
  {
    return override;
  }
  return tryGetDesiredColorScheme();
}

function tryGetDesiredColorScheme()
{
  if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      return 'dark';
    } else {
      return 'light';
    }
  }
  return 'light';
}

function setColorScheme(scheme, explicit) {
  switch(scheme){
    case 'auto':
      setColorScheme(tryGetDesiredColorScheme(), false);
      break;
    case 'dark':
    {
      document.body.classList.add("dark");
      const articles = document.getElementsByTagName("article");
      for (i=0;i<articles.length;i++){
        articles[i].classList.add("dark");
      }
      const headers = document.getElementsByTagName("header");
      for (i=0;i<headers.length;i++){
        headers[i].classList.add("dark");
      }
      const footers = document.getElementsByTagName("footer");
      for (i=0;i<footers.length;i++){
        footers[i].classList.add("dark");
      }
      break;
    }
    case 'light':
    default:
    {
      document.body.classList.remove("dark");
      const articles = document.getElementsByTagName("article");
      for (i=0;i<articles.length;i++){
        articles[i].classList.remove("dark");
      }
      const headers = document.getElementsByTagName("header");
      for (i=0;i<headers.length;i++){
        headers[i].classList.remove("dark");
      }
      const footers = document.getElementsByTagName("footer");
      for (i=0;i<footers.length;i++){
        footers[i].classList.remove("dark");
      }
      break;
    }
  }
  //Save value if set explicitly
  if(explicit){
    localStorage.setItem('useTheme', scheme);
  }
}

//Init
setColorScheme(setDefaultColorScheme(), false);