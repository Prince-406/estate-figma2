const properties = [
  {
    id: 1, title: "Hillcrest Modern Villa", type: "house", status: "For Sale", price: 1250000,
    location: "Beverly Hills, CA", beds: 4, baths: 3, sqft: 3200,
    gallery: [
      "https://images.pexels.com/photos/7598368/pexels-photo-7598368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7587828/pexels-photo-7587828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Nestled in the hills, this contemporary villa features floor-to-ceiling windows, an open-concept layout, and seamless indoor-outdoor living. The lush garden surrounds a private patio perfect for entertaining.",
  },
  {
    id: 2, title: "Lakeside Luxury Cottage", type: "house", status: "For Sale", price: 895000,
    location: "Lake Tahoe, NV", beds: 3, baths: 2, sqft: 2400,
    gallery: [
      "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6920439/pexels-photo-6920439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/8089079/pexels-photo-8089079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "A charming stone-and-wood cottage with warm illumination set against a winter countryside backdrop. Cozy interiors with modern finishes throughout.",
  },
  {
    id: 3, title: "Skyline Penthouse Apartment", type: "apartment", status: "For Sale", price: 650000,
    location: "New York, NY", beds: 2, baths: 2, sqft: 1500,
    gallery: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Stunning penthouse with glass balconies and panoramic city views. Modern kitchen, spa-like bathrooms, and premium finishes throughout.",
  },
  {
    id: 4, title: "Garden View Family Home", type: "house", status: "For Rent", price: 4200,
    location: "Austin, TX", beds: 4, baths: 3, sqft: 2800,
    gallery: [
      "https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7173666/pexels-photo-7173666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7195739/pexels-photo-7195739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Bright and airy family home with panoramic windows, green lawn, and a spacious backyard. Open layout with a chef's kitchen and generous living spaces.",
  },
  {
    id: 5, title: "Mediterranean Villa Estate", type: "house", status: "For Sale", price: 2100000,
    location: "Malibu, CA", beds: 5, baths: 4, sqft: 4500,
    gallery: [
      "https://images.pexels.com/photos/37692742/pexels-photo-37692742.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7546648/pexels-photo-7546648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/8135502/pexels-photo-8135502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Exquisite Mediterranean-style villa with unique architectural details and a terracotta roof. Expansive grounds, private pool, and ocean breeze.",
  },
  {
    id: 6, title: "Downtown Loft Apartment", type: "apartment", status: "For Rent", price: 2800,
    location: "Chicago, IL", beds: 1, baths: 1, sqft: 950,
    gallery: [
      "https://images.pexels.com/photos/8134821/pexels-photo-8134821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7167073/pexels-photo-7167073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6186828/pexels-photo-6186828.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Contemporary two-story home with a spacious paved driveway and manicured garden. Located in a vibrant neighborhood close to amenities.",
  },
  {
    id: 7, title: "Suburban Sunset Estate", type: "house", status: "For Sale", price: 750000,
    location: "Denver, CO", beds: 4, baths: 3, sqft: 3100,
    gallery: [
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6434592/pexels-photo-6434592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Elegant suburban home with a sweeping driveway at sunset. Modern architecture with warm, inviting interiors and a beautifully landscaped yard.",
  },
  {
    id: 8, title: "Twin Modern Residences", type: "house", status: "For Sale", price: 980000,
    location: "Portland, OR", beds: 3, baths: 2, sqft: 2200,
    gallery: [
      "https://images.pexels.com/photos/30580640/pexels-photo-30580640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Symmetrical twin modern houses with striking architectural design. Clean lines, large windows, and energy-efficient construction throughout.",
  },
  {
    id: 9, title: "Forest Edge Retreat", type: "house", status: "For Rent", price: 3800,
    location: "Seattle, WA", beds: 3, baths: 2, sqft: 2000,
    gallery: [
      "https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7173666/pexels-photo-7173666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6207940/pexels-photo-6207940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Contemporary home near the forest with greenery all around. Peaceful setting with modern amenities and easy access to nature trails.",
  },
  {
    id: 10, title: "Classic Brick Townhouse", type: "house", status: "For Sale", price: 540000,
    location: "Boston, MA", beds: 3, baths: 2, sqft: 1850,
    gallery: [
      "https://images.pexels.com/photos/7587470/pexels-photo-7587470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6920439/pexels-photo-6920439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/8135505/pexels-photo-8135505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Elegant brick townhouse with a lush garden and driveway. Timeless charm meets modern comfort in this beautifully maintained home.",
  },
  {
    id: 11, title: "City View High-Rise", type: "apartment", status: "For Sale", price: 480000,
    location: "Miami, FL", beds: 2, baths: 2, sqft: 1200,
    gallery: [
      "https://images.pexels.com/photos/17113690/pexels-photo-17113690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Modern high-rise living with breathtaking city views. Building amenities include a rooftop pool, fitness center, and 24-hour concierge.",
  },
  {
    id: 12, title: "Waterfront Modern Apartments", type: "apartment", status: "For Rent", price: 3200,
    location: "San Diego, CA", beds: 2, baths: 2, sqft: 1100,
    gallery: [
      "https://images.pexels.com/photos/9170385/pexels-photo-9170385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7167073/pexels-photo-7167073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Contemporary waterfront apartments with vibrant architecture. Steps from the beach with resort-style amenities and stunning water views.",
  },
]

const formatPrice = (price, status) => {
  if (status === 'For Rent') return `$${price.toLocaleString()}/mo`
  return `$${price.toLocaleString()}`
}

// --- Navigation ---
const navbar = document.getElementById('navbar')
const navToggle = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active')
  navToggle.classList.toggle('active')
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active')
    navToggle.classList.remove('active')
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'))
    link.classList.add('active')
  })
})

// --- Filters ---
const filterBtns = document.querySelectorAll('.filter-btn')
const noResults = document.getElementById('no-results')

const applyFilters = () => {
  const activeFilter = document.querySelector('.filter-btn.active').dataset.filter
  const searchLocation = document.getElementById('search-location').value.toLowerCase()
  const searchType = document.getElementById('search-type').value
  const searchStatus = document.getElementById('search-status').value

  let visibleCount = 0
  document.querySelectorAll('.property-card').forEach(card => {
    const cardType = card.dataset.type
    const cardStatus = card.dataset.status
    const cardLocation = card.dataset.location

    const typeMatch = activeFilter === 'all' || cardType === activeFilter || cardStatus === activeFilter
    const searchTypeMatch = searchType === 'all' || cardType === searchType
    const searchStatusMatch = searchStatus === 'all' || cardStatus === searchStatus
    const locationMatch = !searchLocation || cardLocation.includes(searchLocation)

    const show = typeMatch && searchTypeMatch && searchStatusMatch && locationMatch
    card.style.display = show ? 'flex' : 'none'
    if (show) visibleCount++
  })

  noResults.style.display = visibleCount === 0 ? 'block' : 'none'
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    applyFilters()
  })
})

// --- Hero Search ---
document.getElementById('search-btn').addEventListener('click', () => {
  document.getElementById('listings').scrollIntoView({ behavior: 'smooth' })
  applyFilters()
})

// --- Property Modal ---
const openModal = (propertyId) => {
  const property = properties.find(p => p.id === propertyId)
  if (!property) return

  const overlay = document.createElement('div')
  overlay.className = 'modal-overlay'
  overlay.id = 'modal-overlay'
  overlay.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" id="modal-close" aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div class="modal-gallery">
        <img src="${property.gallery[0]}" alt="${property.title}" class="modal-main-image" id="modal-main-image" />
        <div class="modal-thumbnails">
          ${property.gallery.map((img, i) => `
            <img src="${img}" alt="View ${i+1}" class="modal-thumbnail ${i === 0 ? 'active' : ''}" data-src="${img}" />
          `).join('')}
        </div>
      </div>
      <div class="modal-details">
        <span class="property-badge ${property.status === 'For Rent' ? 'badge-rent' : 'badge-sale'}">${property.status}</span>
        <div class="property-price">${formatPrice(property.price, property.status)}</div>
        <h2 class="modal-title">${property.title}</h2>
        <p class="property-location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${property.location}
        </p>
        <div class="modal-specs">
          <div><span class="spec-value">${property.beds}</span><span class="spec-label">Bedrooms</span></div>
          <div><span class="spec-value">${property.baths}</span><span class="spec-label">Bathrooms</span></div>
          <div><span class="spec-value">${property.sqft.toLocaleString()}</span><span class="spec-label">Sq Ft</span></div>
        </div>
        <h3 class="modal-section-title">Description</h3>
        <p class="modal-description">${property.description}</p>
        <button class="form-submit modal-contact-btn" id="modal-contact-btn">Schedule a Viewing</button>
      </div>
    </div>
  `
  document.body.appendChild(overlay)
  document.body.style.overflow = 'hidden'

  const closeBtn = document.getElementById('modal-close')
  const mainImage = document.getElementById('modal-main-image')
  const thumbnails = document.querySelectorAll('.modal-thumbnail')
  const contactBtn = document.getElementById('modal-contact-btn')

  const closeModal = () => {
    overlay.remove()
    document.body.style.overflow = ''
  }

  closeBtn.addEventListener('click', closeModal)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal()
  })
  document.addEventListener('keydown', function escClose(e) {
    if (e.key === 'Escape') {
      closeModal()
      document.removeEventListener('keydown', escClose)
    }
  })

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImage.src = thumb.dataset.src
      thumbnails.forEach(t => t.classList.remove('active'))
      thumb.classList.add('active')
    })
  })

  contactBtn.addEventListener('click', () => {
    closeModal()
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  })
}

document.addEventListener('click', (e) => {
  const viewBtn = e.target.closest('[data-view-id]')
  if (viewBtn) {
    openModal(parseInt(viewBtn.dataset.viewId))
  }

  const favBtn = e.target.closest('[data-fav-id]')
  if (favBtn) {
    e.stopPropagation()
    favBtn.classList.toggle('saved')
  }
})

// --- Contact Form ---
const contactForm = document.getElementById('contact-form')
const formSuccess = document.getElementById('form-success')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  formSuccess.style.display = 'block'
  contactForm.reset()
  setTimeout(() => {
    formSuccess.style.display = 'none'
  }, 4000)
})

// --- Animated Counters ---
const animateCounters = () => {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.dataset.target)
    let current = 0
    const increment = target / 60
    const update = () => {
      current += increment
      if (current >= target) {
        el.textContent = target
      } else {
        el.textContent = Math.floor(current)
        requestAnimationFrame(update)
      }
    }
    update()
  })
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters()
      statsObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.3 })

statsObserver.observe(document.querySelector('.stats'))

// --- Scroll Reveal ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('.property-card, .agent-card, .about-image, .about-content, .contact-info, .contact-form').forEach(el => {
  el.classList.add('reveal')
  revealObserver.observe(el)
})
