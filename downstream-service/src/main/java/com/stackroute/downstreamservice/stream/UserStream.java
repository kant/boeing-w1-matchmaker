package com.stackroute.downstreamservice.stream;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;

public interface UserStream {
	String INPUT = "CassandraRegistration";

	@Input(INPUT)
	SubscribableChannel inboundUser();

}
