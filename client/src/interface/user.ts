enum Days {
    Mon = "Mon",
    Tue = "Tue",
    Wed = "Wed",
    Thurs = "Thurs",
    Fri = "Fri",
    Sat = "Sat",
    Sun = "Sun"
}

export interface User {
    _id: string;
    fullName: string;
    email: string;
    isDogsitter: boolean | null;
    city?: string;
    address?: string;
    phoneNumber?: string;
    profilePhoto?: string;
    about?: string;
    payments?: Array<string> | [];
    isThirdParty: boolean | null;
    googleId: null | string;
    isAvailable: boolean | null;
    availabilityDays: Array<Days> | [];
    price: number | null;
    imageGallery: Array<string> | [];
}