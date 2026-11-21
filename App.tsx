  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={(item) => console.log(item)}
      />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          My Alert
        </Alert>
      )}

      <Button
        color="secondary"
        onClick={() => setAlertVisibility(true)}
      >
        My Button
      </Button>
    </>
  );
}

export default App;