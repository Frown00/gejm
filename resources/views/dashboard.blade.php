@extends('layouts.dashboard')
@section('content')
<script src="{{ asset('js/scripts.js') }}"></script>
<script>
var csrf_token = '<?php echo csrf_token(); ?>';
</script>
    <div id="dashboard"></div>
  
@endsection