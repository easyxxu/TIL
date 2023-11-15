import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Solution {
	static int[] arr;
	static int N,M,K;
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		int T = Integer.parseInt(br.readLine());
		
		for(int tc=1;tc<=T;tc++) {
			st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken()); // 손님 수
			M = Integer.parseInt(st.nextToken()); // 붕어빵 만드는데 걸리는 시간
			K = Integer.parseInt(st.nextToken()); // 만든 붕어빵 개수
			
			arr = new int[N];
			String result = "";
			
			st = new StringTokenizer(br.readLine());
			
			// 배열에 입력
			for(int i=0;i<N;i++) {
				arr[i] = Integer.parseInt(st.nextToken());
			}
			Arrays.sort(arr);
			
			sb.append("#"+tc+" "+isPossible()+"\n");
		}
		System.out.print(sb);
	}
	public static String isPossible() {
		int fish = 0;
		int idx = 0;
		int time = 0;
		while(true) {
			while(time + M > arr[idx]) {
				if(fish-- == 0) { // 붕어빵이 모자른 경우
					return "Impossible";
				}
				if(idx++ >= N - 1) { 
					return "Possible";
				}
			}
			time += M;
			fish += K;
		}
	}
}
