// @ts-ignore
export function load({ params }) {
    return {
      post: {
        title: `Title for ${params.id} goes here`,
        content: `Content for ${params.id} goes here`
      }
    };
  }