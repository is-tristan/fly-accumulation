# How to get the keys we need to publish an Instagram carousel

To publish a carousel on your Instagram account, we need access through Meta (Facebook and Instagram). Please follow the steps below and send us the five values at the end. Use a private channel, such as a password-manager share. Please do not send the App Secret or access token by email or chat.

You will send us:

- Meta App ID
- Meta App Secret
- Facebook Page ID
- Instagram professional account ID
- Long-lived Page access token

## 1. Turn your Instagram account into a Professional account

In the Instagram app, open **Settings and activity**, then **Account type and tools**, then **Switch to professional account**. Choose **Business** or **Creator**. Keep the account public while you complete the connection.

## 2. Connect that account to a Facebook Page

You need a Facebook Page that you admin, and that Page must be linked to the Instagram account. In the Instagram app, open **Settings and activity**, then **Account Center** (or **Linked accounts**), and connect the Facebook Page.

You must be an admin of that Page, and you must be allowed to create content on it. Use that same Facebook login for the steps below.

## 3. Create a Meta app

1. Sign in at [developers.facebook.com](https://developers.facebook.com/) with the Facebook user who admins the Page.
2. Open **My Apps**, then **Create app**.
3. Choose the business app type.
4. When Meta asks for a use case, choose the option for managing content on Instagram, and select **API setup with Facebook Login**. That is the setup that uses your linked Facebook Page.
5. Open the app’s **Settings**, then **Basic**, and copy the **App ID** and **App Secret**.

You do not need to submit the app for App Review if we will only publish to this account. The Facebook user who generates the token must have a role on the app (admin, developer, or tester).

## 4. Generate a token that can publish

1. Open the [Graph API Explorer](https://developers.facebook.com/tools/explorer/).
2. In the application menu, select the app you created in step 3.
3. Choose **User Token**, then add these permissions: `pages_show_list`, `pages_read_engagement`, `instagram_basic`, and `instagram_content_publish`.
4. Click **Generate Access Token** and approve every prompt, including the Page and the Instagram account.

## 5. Copy the Page ID, Instagram account ID, and Page token

In the Explorer, run this query:

```
me/accounts?fields=id,name,access_token,instagram_business_account
```

From the Page that is linked to your Instagram account, copy:

- `id` — your Facebook Page ID
- `access_token` — your Page access token
- `instagram_business_account.id` — your Instagram professional account ID

## 6. Turn the user token into a long-lived one

The token from step 4 expires in about an hour. In the Explorer, open **Access Token Tool** (or the token info panel), find that user token, and click **Extend Access Token**. The extended token lasts about 60 days.

Run the same `me/accounts` query again with the extended token. The new `access_token` on the Page is the long-lived Page token. Please send that one. It stays valid until you change your password, remove the app, or revoke permissions.

## What to send us

Please send:

1. Meta App ID
2. Meta App Secret
3. Facebook Page ID
4. Instagram professional account ID
5. Long-lived Page access token

Treat the App Secret and the access token like passwords for your Instagram account.
