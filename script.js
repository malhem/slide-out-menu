function openNav() /*open overlay*/
{
    document.getElementById("myNav").style.width = "100%";
    /*document.getElementById("openBtn").style.display = "none";*/
}
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() 
{
    document.getElementById("myNav").style.width = "0%";
    /*document.getElementById("openBtn").style.display = "block";*/

    resetOverlay();
}

function hideBaseOptions()
{
    document.getElementById("mopedBtn").style.display = "none";
    document.getElementById("carBtn").style.display = "none";
}

function showBaseOptions()
{
    document.getElementById("mopedBtn").style.display = "block";
    document.getElementById("carBtn").style.display = "block";

    document.getElementById("returnBtn").style.display = "none";
}

let carOptions = document.getElementsByClassName("carOptions");

function showCarOverlay()
{
    hideBaseOptions();
    document.getElementById("returnBtn").style.display = "block";

    for (let i = 0; i < carOptions.length; i++)
    {
      carOptions[i].style.display = "block";
    }
}

let mopedOptions = document.getElementsByClassName("mopedOptions");

function showMopedOverlay()
{
    hideBaseOptions();
    document.getElementById("returnBtn").style.display = "block";

    for (let i = 0; i < mopedOptions.length; i++)
    {
      mopedOptions[i].style.display = "block";
    }
}

function resetOverlay()
{
    for (let i = 0; i < mopedOptions.length; i++)
    {
      mopedOptions[i].style.display = "none";
    }

    for (let i = 0; i < carOptions.length; i++)
    {
      carOptions[i].style.display = "none";
    }

    showBaseOptions();
}