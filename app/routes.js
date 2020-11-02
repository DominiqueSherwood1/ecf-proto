const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/it-three/admin-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var admin = req.session.data['admin-account']

  // Check whether the variable matches a condition
  if (admin == "yes") {
    // Send user to next page
    res.redirect('/it-three/password')
  }

  else {
    // Send user to ineligible page
    res.redirect('/it-three/email')
  }

})



module.exports = router
