type Fields = {
  name: string; // Name of the field
  key: string; // Unique key for the field (used as React key)
  placeholder: string; // Placeholder text displayed in the input
  type: "email" | "password" | "text"; // Allowed input types (limited to what you use)
  keyboardType?: keyboardType; // Supported keyboard types
  secure?:boolean
};


type keyboardType = "default" | "email-address" | "phone-pad";