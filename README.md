# upload_in_menu

This is a ribozitry for a bug report on Joy UI.

The `onChange` event of `<Input type={"file"}>` nested in `<MenuItem>` does not fire.

## reproduction procedure

Access `localhost:3000` after executing the following
```bash
bun install
bun run dev
```

(I was able to reproduce it in `npm run dev`)


The page includes an Input element, an Input element labeled as a button, and an Input tag nested in a MenuItem.

Try using each of these while checking the Console in the Admin Tools.

Only for "Input tags nested in MenueItem", the log that should be output by `onChange` is not output.

(Translated by DeepL)
