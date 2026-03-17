export type userList = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: addressType;
  website: string;
  company: companyType;
};

type addressType = {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
};
type companyType = {
  name: string;
};
