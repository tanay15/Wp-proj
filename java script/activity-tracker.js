// Website Activity Tracking
document.addEventListener("DOMContentLoaded", () => {
  // Create activity tracker element
  const body = document.querySelector("body")

  const activityTracker = document.createElement("div")
  activityTracker.className = "activity-tracker"
  activityTracker.innerHTML = `
        <p>Website Activity</p>
        <div id="activity-content"></div>
    `

  body.appendChild(activityTracker)

  // Track page views
  trackActivity("Viewed page: " + document.title)

  // Track clicks on property cards
  document.addEventListener("click", (e) => {
    const propertyCard = e.target.closest(".property-card")
    if (propertyCard) {
      const propertyTitle = propertyCard.querySelector("h3").textContent
      trackActivity("Clicked on property: " + propertyTitle)
    }
  })

  // Track form submissions
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      const formId = this.id || "Unknown form"
      trackActivity("Submitted form: " + formId)
    })
  })

  // Track search queries
  const searchForm = document.getElementById("search-form")
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      const searchQuery = this.querySelector('input[name="search"]').value
      trackActivity("Searched for: " + searchQuery)
    })
  }

  // Display activity
  function trackActivity(activity) {
    const activityContent = document.getElementById("activity-content")
    if (activityContent) {
      const activityItem = document.createElement("p")
      activityItem.textContent = activity

      // Add timestamp
      const timestamp = new Date().toLocaleTimeString()
      const timestampSpan = document.createElement("span")
      timestampSpan.textContent = " (" + timestamp + ")"
      timestampSpan.style.color = "var(--dark-gray)"
      timestampSpan.style.fontSize = "0.8rem"

      activityItem.appendChild(timestampSpan)
      activityContent.appendChild(activityItem)

      // Show tracker
      activityTracker.classList.add("show")

      // Hide after 5 seconds
      setTimeout(() => {
        activityTracker.classList.remove("show")
      }, 5000)

      // Store in localStorage
      const activities = JSON.parse(localStorage.getItem("activities") || "[]")
      activities.push({
        activity,
        timestamp: new Date().toISOString(),
      })
      localStorage.setItem("activities", JSON.stringify(activities))
    }
  }
})
