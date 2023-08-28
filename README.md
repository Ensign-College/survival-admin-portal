## Survival Admin Portal

The Survival Admin Portal is an admin portal for the survival-guide app, which is an Ensign College mobile app. This portal is designed to manage various aspects of the survival-guide operations and connects with Supabase for data handling.

Installation
Follow these steps to set up the Survival Admin Portal:

1. Clone the Repository

```
git clone https://github.com/ensign-college/survival-admin-portal.git
cd survival-admin-portal
```

2. Install Dependencies
   Make sure you have Node.js and npm installed, then run:

```
npm install
```

3. Create .env File
   You'll need to set up environment variables to connect with Supabase. An example file is provided as example.env.local. Copy and rename this file:

```
cp example.env.local .env
```

Then edit the .env file to include the correct values for the following:

```
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL_HERE
NEXT_PUBLIC_SUPABASE_API_KEY=YOUR_SUPABASE_API_KEY_HERE
```

4. Get Supabase Credentials
   If you don't have the Supabase URL and API key, please write an email to one of the following to request the credentials:

- [csta01@ensign.net](mailto:csta01@ensign.net)
- [csta02@ensign.net](mailto:csta02@ensign.net)
- [csta03@ensign.net](mailto:csta03@ensign.net)
- [itta02@ensign.net](mailto:itta02@ensign.net)

5. Start the Development Server
   Run the following command to start the development server:

```
npm run dev
```

Visit http://localhost:3000 in your browser to see the application running.

## Contributing

Use `username/branch_function` naming convention for your branches. Once you are done create PR for it be reviewed and merged.
