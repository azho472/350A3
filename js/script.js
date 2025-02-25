//DOOR SCRIPT

if (typeof(Storage) !== "undefined" && sessionStorage.getItem("door1") == null) {
  sessionStorage.setItem("door1", "open");
  sessionStorage.setItem("door1lock", "unlock");
  sessionStorage.setItem("door2", "close");
  sessionStorage.setItem("door2lock", "lock");
  sessionStorage.setItem("door3", "close");
  sessionStorage.setItem("door3lock", "lock");
  sessionStorage.setItem("door4", "close");
  sessionStorage.setItem("door4lock", "unlock");

  sessionStorage.setItem("window1", "open");
  sessionStorage.setItem("window1lock", "unlock");
  sessionStorage.setItem("window2", "close");
  sessionStorage.setItem("window2lock", "lock");
  sessionStorage.setItem("window3", "open");
  sessionStorage.setItem("window3lock", "unlock");
  sessionStorage.setItem("window4", "close");
  sessionStorage.setItem("window4lock", "unlock");

  sessionStorage.setItem("light1", "close");
  sessionStorage.setItem("light2", "close");
  sessionStorage.setItem("light3", "close");
  sessionStorage.setItem("light4", "close");
  sessionStorage.setItem("light5", "open");
  sessionStorage.setItem("light6", "close");
  sessionStorage.setItem("light7", "open");
  sessionStorage.setItem("light8", "open");
  sessionStorage.setItem("light9", "close");
}

if (sessionStorage.getItem("door1lock") == "unlock") {
  $('#door1lock').bootstrapToggle("on");
  $('#door1').bootstrapToggle('enable');
} else {
  $('#door1').bootstrapToggle('disable');
}
if (sessionStorage.getItem("door1") == "open") {
  $('#door1').bootstrapToggle("on");

}

if (sessionStorage.getItem("door2") == "open") {
  $('#door2').bootstrapToggle("on");
  $('#door2lock').bootstrapToggle("on");
}
if (sessionStorage.getItem("door2lock") == "unlock") {
  $('#door2lock').bootstrapToggle("on");
} else {
  $('#door2').bootstrapToggle('disable');
}
if (sessionStorage.getItem("door3") == "open") {
  $('#door3').bootstrapToggle("on");
  $('#door3lock').bootstrapToggle("on");
}

if (sessionStorage.getItem("door3lock") == "unlock") {
  $('#door3lock').bootstrapToggle("on");
} else {
  $('#door3').bootstrapToggle('disable');
}
if (sessionStorage.getItem("door4") == "open") {
  $('#door4').bootstrapToggle("on");
  $('#door4lock').bootstrapToggle("on");
}

if (sessionStorage.getItem("door4lock") == "unlock") {
  $('#door4lock').bootstrapToggle("on");
} else {
  $('#door4').bootstrapToggle('disable');
}

$(function() {
  $('#door1lock').change(function() {
    if (sessionStorage.getItem("door1lock") == "unlock") {
      sessionStorage.setItem("door1lock", "lock");
      $('#door1').bootstrapToggle("off");
      $('#door1').bootstrapToggle('disable');
    }
    else {
      sessionStorage.setItem("door1lock", "unlock");
      $('#door1').bootstrapToggle('enable');
    }
  })
})

$(function() {
  $('#door1').change(function() {
    if (sessionStorage.getItem("door1") == "open") {
      sessionStorage.setItem("door1", "close");
    }
    else {
      if (sessionStorage.getItem("door1lock") == "unlock") {
        sessionStorage.setItem("door1", "open");
    }
    }
  })
})

$(function() {
  $('#door2lock').change(function() {
    if (sessionStorage.getItem("door2lock") == "unlock") {
      sessionStorage.setItem("door2lock", "lock");
      $('#door2').bootstrapToggle("off");
      $('#door2').bootstrapToggle('disable');
    }
    else {
      sessionStorage.setItem("door2lock", "unlock");
      $('#door2').bootstrapToggle('enable');
    }
  })
})
$(function() {
  $('#door2').change(function() {
    if (sessionStorage.getItem("door2") == "open") {
      sessionStorage.setItem("door2", "close");
    }
    if (sessionStorage.getItem("door2lock") == "unlock") {
      sessionStorage.setItem("door2", "open");
  }
  })
})

$(function() {
  $('#door3lock').change(function() {
    if (sessionStorage.getItem("door3lock") == "unlock") {
      sessionStorage.setItem("door3lock", "lock");
      $('#door3').bootstrapToggle("off");
      $('#door3').bootstrapToggle('disable');
    }
    else {
      sessionStorage.setItem("door3lock", "unlock");
      $('#door3').bootstrapToggle('enable');
    }
  })
})
$(function() {
  $('#door3').change(function() {
    if (sessionStorage.getItem("door3") == "open") {
      sessionStorage.setItem("door3", "close");
    }
    if (sessionStorage.getItem("door3lock") == "unlock") {
      sessionStorage.setItem("door3", "open");
  }
  })
})

$(function() {
  $('#door4lock').change(function() {
    if (sessionStorage.getItem("door4lock") == "unlock") {
      sessionStorage.setItem("door4lock", "lock");
      $('#door4').bootstrapToggle("off");
      $('#door4').bootstrapToggle('disable');
    }
    else {
      sessionStorage.setItem("door4lock", "unlock");
      $('#door4').bootstrapToggle('enable');
    }
  })
})
$(function() {
  $('#door4').change(function() {
    if (sessionStorage.getItem("door4") == "open") {
      sessionStorage.setItem("door4", "close");
    }
    else {
      if (sessionStorage.getItem("door4lock") == "unlock") {
        sessionStorage.setItem("door4", "open");
    }
    }
  })
})

//WINDOWS SCRIPT
if (sessionStorage.getItem("window1lock") == "unlock") {
  $('#window1lock').bootstrapToggle("on");
  $('#window1').bootstrapToggle('enable');
} else {
  $('#window1').bootstrapToggle('disable');
}
if (sessionStorage.getItem("window1") == "open") {
  $('#window1').bootstrapToggle("on");

}

if (sessionStorage.getItem("window2") == "open") {
  $('#window2').bootstrapToggle("on");
  $('#window2lock').bootstrapToggle("on");
}
if (sessionStorage.getItem("window2lock") == "unlock") {
  $('#window2lock').bootstrapToggle("on");
} else {
  $('#window2').bootstrapToggle('disable');
}
if (sessionStorage.getItem("window3") == "open") {
  $('#window3').bootstrapToggle("on");
  $('#window3lock').bootstrapToggle("on");
}

if (sessionStorage.getItem("window3lock") == "unlock") {
  $('#window3lock').bootstrapToggle("on");
} else {
  $('#window3').bootstrapToggle('disable');
}
if (sessionStorage.getItem("window4") == "open") {
  $('#window4').bootstrapToggle("on");
  $('#window4lock').bootstrapToggle("on");
}

if (sessionStorage.getItem("window4lock") == "unlock") {
  $('#window4lock').bootstrapToggle("on");
} else {
  $('#window4').bootstrapToggle('disable');
}

$(function() {
  $('#window1lock').change(function() {
    if (sessionStorage.getItem("window1lock") == "unlock") {
      sessionStorage.setItem("window1lock", "lock");
      $('#window1').bootstrapToggle("off");
      $('#window1').bootstrapToggle('disable');
    }
    else {
      sessionStorage.setItem("window1lock", "unlock");
      $('#window1').bootstrapToggle('enable');
    }
  })
})

$(function() {
  $('#window1').change(function() {
    if (sessionStorage.getItem("window1") == "open") {
      sessionStorage.setItem("window1", "close");
    }
    else {
      if (sessionStorage.getItem("window1lock") == "unlock") {
        sessionStorage.setItem("window1", "open");
    }
    }
  })
})

$(function() {
  $('#window2lock').change(function() {
    if (sessionStorage.getItem("window2lock") == "unlock") {
      sessionStorage.setItem("window2lock", "lock");
      $('#window2').bootstrapToggle("off");
      $('#window2').bootstrapToggle('disable');
    }
    else {
      sessionStorage.setItem("window2lock", "unlock");
      $('#window2').bootstrapToggle('enable');
    }
  })
})
$(function() {
  $('#window2').change(function() {
    if (sessionStorage.getItem("window2") == "open") {
      sessionStorage.setItem("window2", "close");
    }
    else {
      if (sessionStorage.getItem("window2lock") == "unlock") {
        sessionStorage.setItem("window2", "open");
    }
    }
  })
})

$(function() {
  $('#window3lock').change(function() {
    if (sessionStorage.getItem("window3lock") == "unlock") {
      sessionStorage.setItem("window3lock", "lock");
      $('#window3').bootstrapToggle("off");
      $('#window3').bootstrapToggle('disable');
    }
    else {
      sessionStorage.setItem("window3lock", "unlock");
      $('#window3').bootstrapToggle('enable');
    }
  })
})
$(function() {
  $('#window3').change(function() {
    if (sessionStorage.getItem("window3") == "open") {
      sessionStorage.setItem("window3", "close");
    }
    else {
      if (sessionStorage.getItem("window3lock") == "unlock") {
        sessionStorage.setItem("window3", "open");
    }
    }
  })
})

$(function() {
  $('#window4lock').change(function() {
    if (sessionStorage.getItem("window4lock") == "unlock") {
      sessionStorage.setItem("window4lock", "lock");
      $('#window4').bootstrapToggle("off");
      $('#window4').bootstrapToggle('disable');
    }
    else {
      sessionStorage.setItem("window4lock", "unlock");
      $('#window4').bootstrapToggle('enable');
    }
  })
})
$(function() {
  $('#window4').change(function() {
    if (sessionStorage.getItem("window4") == "open") {
      sessionStorage.setItem("window4", "close");
    }
    else {
      if (sessionStorage.getItem("window4lock") == "unlock") {
        sessionStorage.setItem("window4", "open");
    }
    }
  })
})

//LIGHTS scripts

if (sessionStorage.getItem("light1") == "open") {
  $('#light1').bootstrapToggle("on");
}
if (sessionStorage.getItem("light2") == "open") {
  $('#light2').bootstrapToggle("on");
}
if (sessionStorage.getItem("light3") == "open") {
  $('#light3').bootstrapToggle("on");
}
if (sessionStorage.getItem("light4") == "open") {
  $('#light4').bootstrapToggle("on");
}
if (sessionStorage.getItem("light5") == "open") {
  $('#light5').bootstrapToggle("on");
}
if (sessionStorage.getItem("light6") == "open") {
  $('#light6').bootstrapToggle("on");
}
if (sessionStorage.getItem("light7") == "open") {
  $('#light7').bootstrapToggle("on");
}
if (sessionStorage.getItem("light8") == "open") {
  $('#light8').bootstrapToggle("on");
}
if (sessionStorage.getItem("light9") == "open") {
  $('#light9').bootstrapToggle("on");
}

$(function() {
  $('#light1').change(function() {
    if (sessionStorage.getItem("light1") == "open") {
      sessionStorage.setItem("light1", "close");
    }
    else {
      sessionStorage.setItem("window4", "open");
    }
  })
})
$(function() {
  $('#light2').change(function() {
    if (sessionStorage.getItem("light2") == "open") {
      sessionStorage.setItem("light2", "close");
    }
    else {
      sessionStorage.setItem("light2", "open");
    }
  })
})
$(function() {
  $('#light3').change(function() {
    if (sessionStorage.getItem("light3") == "open") {
      sessionStorage.setItem("light3", "close");
    }
    else {
      sessionStorage.setItem("light3", "open");
    }
  })
})
$(function() {
  $('#light4').change(function() {
    if (sessionStorage.getItem("light4") == "open") {
      sessionStorage.setItem("light4", "close");
    }
    else {
      sessionStorage.setItem("light4", "open");
    }
  })
})
$(function() {
  $('#light5').change(function() {
    if (sessionStorage.getItem("light5") == "open") {
      sessionStorage.setItem("light5", "close");
    }
    else {
      sessionStorage.setItem("light5", "open");
    }
  })
})
$(function() {
  $('#light6').change(function() {
    if (sessionStorage.getItem("light6") == "open") {
      sessionStorage.setItem("light6", "close");
    }
    else {
      sessionStorage.setItem("light6", "open");
    }
  })
})
$(function() {
  $('#light7').change(function() {
    if (sessionStorage.getItem("light7") == "open") {
      sessionStorage.setItem("light7", "close");
    }
    else {
      sessionStorage.setItem("light7", "open");
    }
  })
})
$(function() {
  $('#light8').change(function() {
    if (sessionStorage.getItem("light8") == "open") {
      sessionStorage.setItem("light8", "close");
    }
    else {
      sessionStorage.setItem("light8", "open");
    }
  })
})
$(function() {
  $('#light9').change(function() {
    if (sessionStorage.getItem("light9") == "open") {
      sessionStorage.setItem("light9", "close");
    }
    else {
      sessionStorage.setItem("light9", "open");
    }
  })
})
