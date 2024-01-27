const date = new Date()
const year = date.getFullYear()
const month = date.toLocaleString('default', {month: 'short'})
const day = date.getDate()
const time = date.toLocaleString('default', {hour: 'numeric', minute: 'numeric',hour12: true})
const period = `${day} ${month} ${year}, ${time}`

export const Requests_Data = [
    {id: '#657899832',
    period,
    partnerName: 'USAID',
    partnerType: 'Donor & NGO',
    status: 'Pending',
    p_status: 'Pending',
    amount: 3500,
    partner_status: 'Active'
},
    {id: '#787754567',
    period,
    partnerName: 'Ministry of Health',
    partnerType: 'Donor & NGO',
    status: 'Active',
    p_status: 'Paid',
    amount: 3500,
    partner_status: 'Inactive'
    
},
    {id: '#787754567',
    period,
    partnerName: 'Indigo Pharmaceuticals',
    partnerType: 'pharmacy',
    status: 'Pending',
    p_status: 'Pending',
    amount: 3500,
    partner_status: 'Active'
},
    {id: '#787754567',
    period,
    partnerName: 'Southwest Medicals',
    partnerType: 'hospitals',
    status: 'Inactive',
    p_status: 'Paid',
    amount: 3500,
    partner_status: 'Inactive'
},
    {id: '#787754567',
    period,
    partnerName: 'Proxima Labs',
    partnerType: 'laboratory',
    status: 'Inactive',
    p_status: 'Paid',
    amount: 3500,
    partner_status: 'Active'
},
    {id: '#787754567',
    period,
    partnerName: 'German Innovatioche Zeuntiguesse',
    partnerType: 'Donor & NGO',
    status: 'Inactive',
    p_status: 'Paid',
    amount: 3500,
    partner_status: 'Active'
},
    {id: '#787754567',
    period,
    partnerName: 'Optima Health',
    partnerType: 'Health Insurance',
    status: 'Active',
    p_status: 'Paid',
    amount: 3500,
    partner_status: 'Active'
},
    {id: '#787754567',
    period,
    partnerName: 'Axios Trechnologies',
    partnerType: 'Digital Tools',
    status: 'Inactive',
    p_status: 'Paid',
    amount: 3500,
    partner_status: 'Active'
},
]