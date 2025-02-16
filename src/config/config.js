const URLS = {
    HOME: "/",
    AUTH: {
      LOGIN: "/login",
      REGISTER: "/register",
    },
    USER_DASHBOARD: {
      DASHBOARD: "/dashboard",
      PROFILE: "/dashboard/profile",
      MY_BLOGS: "/dashboard/my-blogs",
      CREATE_BLOG: "/dashboard/create-new-blog",
      ANALYTICS: "/dashboard/analytics",
      SETTINGS: "/dashboard/settings",
    },
    BLOG: {
      VIEW_BLOG: "/blog/:id",
      EDIT_BLOG: "/blog/edit/:id",
    },
    ADMIN: {
      DASHBOARD: "/admin/dashboard",
      MANAGE_USERS: "/admin/manage-users",
      MANAGE_BLOGS: "/admin/manage-blogs",
    },
    ABOUT: "/about",
    CONTACT: "/contact",
    PRIVACY_POLICY: "/privacy-policy",
    TERMS_AND_CONDITIONS: "/terms-and-conditions",
  };
  
  export default URLS;