<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep business copy literal in route components and shared chrome in the root layout; this website is intentionally static with no content service or backend.
- Use TanStack Link for internal navigation, styled through the design system; it preserves the fixed router's typed navigation and accessibility.
- Serve website photography from public/images with individual img elements; this keeps media local and follows the requested image format.
- Contact submission is a browser-only demonstration and must explicitly say no message was delivered; no recipient is configured.
