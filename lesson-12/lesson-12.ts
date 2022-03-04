// A const assertion is a special type assertion that uses the const keyword instead of a specific type name. When using a const assertion on an object literal expression, all properties will become readonly properties and no literal types within the expression will be widened.

{
  const ORIGIN = {
    x: 0,
    y: 0,
  };
  ORIGIN.x = 1;
}

// =============================================================================

{
  const ORIGIN: {
    readonly x: number;
    readonly y: number;
  } = {
    x: 0,
    y: 0,
  };
  ORIGIN.x = 1;
}

// =============================================================================

{
  const ORIGIN: {
    readonly x: 0;
    readonly y: 0;
  } = {
    x: 0,
    y: 0,
  };
  ORIGIN.x = 1;
}

// =============================================================================

{
  const ORIGIN_ = {
    x: 0,
    y: 0,
  } as const;
  ORIGIN_.x = 1;
}
